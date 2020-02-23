import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Box,
    Button,
    makeStyles,
    MenuItem,
    Grid,
    Typography,
    } from '@material-ui/core';

import { Header } from '../components/header/header'
import { List } from '../components/list/list'
import { TMD_URL, TMD_API_KEY } from '../constants'

const useStyles = makeStyles({
    search: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        
    },
    input: {
        flexGrow: 1,
        marginRight: 16,
        marginTop: 16,
    },
    button: {
        marginTop: 16,
    },
    select: {
        width: 80,
    }
})

const OPTIONS = [
    {
        value: 'movie'
    },
    {
        value: 'tv'
    }
]

export const Search = () => {
    let [ searchArea, setSearchArea ] = useState('movie');
    let [ searchValue, setSearchValue] = useState('');
    let [ list, setList ] = useState([]);
    let [ page, setPage ] = useState(1);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSearchArea(e.target.value)
    }

    useEffect(() => {
        if (searchValue) {
            fetch(`${TMD_URL}search/${searchArea}?${TMD_API_KEY}&page=${page}&query=${searchValue}`)
                .then(res => res.json())
                .then(result => setList(result.results))
        }
        
    }, [searchValue, page, searchArea])

    const nextPage = () => {
        if (page < 500) {
            setPage(page + 1)
        }
    }
    const backPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const classes = useStyles();
    return (
            <Container component='div'>
                <Header />
                <Box component='div' className={classes.search}>
                    <TextField 
                        select 
                        label='area' 
                        className={classes.select} 
                        onChange={handleSelectChange} 
                        value={searchArea}
                    >
                        {OPTIONS.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                        className={classes.input} 
                        onChange={handleInputChange} 
                        value={searchValue}
                    />
                    <Button 
                        variant='contained' 
                        color='primary'
                        className={classes.button}
                    >
                        Search
                    </Button>
                </Box>
                <Typography 
                    variant='subtitle2' 
                    component='span' 
                    style={{'margin': '16px', 'display': 'inline-block'}}
                >
                    Current page: {page}
                </Typography>
                <Button 
                    onClick={backPage} 
                    variant='contained' 
                    color='primary' 
                    style={{'marginRight': '16px'}}
                >
                    back
                </Button>
                <Button 
                    onClick={nextPage} 
                    variant='contained' 
                    color='primary'
                >
                    next
                </Button>
                <Grid>
                    <List type={searchArea} list={list}/>
                </Grid>
                {list &&
                    <Box className={classes.buttonBox}>
                        <Button 
                            onClick={backPage} 
                            variant='contained' 
                            color='primary' 
                            style={{'marginRight': '32px'}}
                        >
                            back
                        </Button>
                        <Button 
                            onClick={nextPage} 
                            variant='contained' 
                            color='primary'
                        >
                            next
                        </Button>
                    </Box>
                }
            </Container>
        )
}