import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Box,
    Button,
    makeStyles,
    MenuItem,
    Grid,
} from '@material-ui/core';

import { CircularProgress } from '@material-ui/core';

import { Header } from '../components/header/header'
import { List } from '../components/list/list'
import { PaginationButtons } from '../components/pagination-buttons/pagination-buttons';

import { TMD_Api } from '../api'
import { MIN_PAGE, OPTIONS } from '../constants'

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
})
const API = new TMD_Api()
export const Search = () => {
    const [searchArea, setSearchArea] = useState('movie');
    const [searchValue, setSearchValue] = useState('');
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState([1]);
    const handleInputChange = e => setSearchValue(e.target.value);
    const handleSelectChange = e => setSearchArea(e.target.value);
    useEffect(() => {
        if (searchValue) {
            API.fetchWithSearch(searchArea, searchValue, page)
                .then(res => {
                    setList(res.results)
                    setMaxPage(res.total_pages);
                })
        }
    }, [searchValue, page, searchArea])
    const nextPage = () => {
        if (page < maxPage) {
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
            {(isEmpty && searchValue) &&
                <CircularProgress style={{ display: 'block', margin: '0 auto' }} />
            }
            {(!isEmpty && searchValue) &&
                <>
                    <PaginationButtons
                        currentPage={page}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        backPage={backPage}
                    />
                    <Grid>
                        <List type={searchArea} list={list} />
                    </Grid>
                    <PaginationButtons
                        currentPage={page}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        backPage={backPage}
                    />
                </>
            }
        </Container>
    )
}