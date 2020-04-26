import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { List } from '../list/list'
import { TMD_Api } from '../../api'
import { MAX_PAGE, MIN_PAGE } from '../../constants'

const useStyles = makeStyles({
    card: {
        boxSizing: 'border-box',
        width: 280,
        padding: 24,
        flexGrow: 0,
        flexShrink: 0,
    },
    media: {
        width: 200,
        height: 300,
        marginBottom: 8,
    },
    movieTitle: {
        marginBottom: 16,
    },
    inlineSubtitle: {
        marginRight: 8,
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 32,
    },
    mr2: {
        marginRight: '16px'
    },
    mr4: {
        marginRight: '32px'
    },
    currentPage: {
        margin: '16px', 
        display: 'inline-block' 
    }
});
const API = new TMD_Api()
export const MoviesList = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        // fetch(`${TMD_URL}${DISCOVER_PATH}movie?${TMD_API_KEY}&page=${page}`)
        //     .then(res => res.json())
        //     .then(result => {
        //         setList(result.results);
        //     });
        API.fetchMovies(page)
            .then(list => setList(list))
        scrollToTop()
    }, [page])
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
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    const classes = useStyles()
    return (
        <>
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
            <List type='movie' list={list} />
            <Box className={classes.buttonBox}>
                <Button onClick={backPage} variant='contained' color='primary' className={classes.mr4}>
                    back
                </Button>
                <Button onClick={nextPage} variant='contained' color='primary'>
                    next
                </Button>
            </Box>
        </>
    )
}