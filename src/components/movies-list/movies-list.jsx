import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';

import { List } from '../list/list'

import { TMD_URL, DISCOVER_PATH, TMD_API_KEY } from '../../constants'

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
});

export const MoviesList = () => {
    const [ list, setList ] = useState([]);
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
        fetchMovies()
        scrollToTop()
    }, [page])
    const fetchMovies = () => {
        fetch(`${TMD_URL}${DISCOVER_PATH}movie?${TMD_API_KEY}&page=${page}`)
            .then(res => res.json())
            .then(result => {
                setList(result.results);
            })
    }
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
            <List type='movie' list={list}/>
            <Box className={classes.buttonBox}>
                <Button onClick={backPage} variant='contained' color='primary' style={{'marginRight': '32px'}}>
                    back
                </Button>
                <Button onClick={nextPage} variant='contained' color='primary'>
                    next
                </Button>
            </Box>
        </>
    )
}