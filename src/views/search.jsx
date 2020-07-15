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

import { TMD_Api } from '../api'
import { MAX_PAGE, MIN_PAGE, OPTIONS } from '../constants'

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
    },
    currentPage: {
        margin: '16px', 
        display: 'inline-block'
    },
    mr2: {
        marginRight: '16px'
    },
    mr4: {
        marginRight: '32px'
    }
})
const API = new TMD_Api()
export const Search = () => {
    let [searchArea, setSearchArea] = useState('movie');
    let [searchValue, setSearchValue] = useState('');
    let [list, setList] = useState([]);
    let [page, setPage] = useState(1);
    const handleInputChange = e => setSearchValue(e.target.value);
    const handleSelectChange = e => setSearchArea(e.target.value);
    useEffect(() => {
        if (searchValue) {
            API.fetchWithSearch(searchArea, searchValue, page)
                .then(result => setList(result.results))

        }
    }, [searchValue, page, searchArea])
    const nextPage = () => {
        if (page < MAX_PAGE) {
            setPage(page + 1)
        }
    }
    const backPage = () => {
        if (page > MIN_PAGE) {
            setPage(page - 1)
        }
    }
    const classes = useStyles();
    const isEmpty = list.length === 0;
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
                className={classes.currentPage}
            >
                Current page: {page}
            </Typography>
            <Button
                onClick={backPage}
                variant='contained'
                color='primary'
                className={classes.mr2}
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
                <List type={searchArea} list={list} />
            </Grid>
            {!isEmpty &&
                <Box className={classes.buttonBox}>
                    <Button
                        onClick={backPage}
                        variant='contained'
                        color='primary'
                        className={classes.mr4}
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