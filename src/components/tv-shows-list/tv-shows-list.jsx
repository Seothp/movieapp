import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { List } from '../list/list'
import { TMD_URL, DISCOVER_PATH, TMD_API_KEY, MAX_PAGE, MIN_PAGE } from '../../constants'

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
});

export const TvShowList = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const classes = useStyles()
    useEffect(() => {
        fetch(`${TMD_URL}${DISCOVER_PATH}tv?${TMD_API_KEY}&page=${page}`)
            .then(res => res.json())
            .then(result => {
                setList(result.results);
            });
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
    return (
        <div className="tv-shows">
            <Typography
                variant='subtitle2'
                component='span'
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
            <List type='tv' list={list} />
            <Box className={classes.buttonBox}>
                <Button onClick={backPage} variant='contained' color='primary' className={classes.mr4}>
                    back
                </Button>
                <Button onClick={nextPage} variant='contained' color='primary'>
                    next
                </Button>
            </Box>
        </div>
    )
}