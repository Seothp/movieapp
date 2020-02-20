import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import { List } from '../list/list'
import { TMD_URL, DISCOVER_PATH, TMD_API_KEY, TMD_IMG_URL, TV_SHOW_PATH } from '../../constants'

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

const cardLinkStyles = {
    display: 'flex',
    boxSizing: 'border-box',
    width: '280px',
    textDecoration: 'none',
    flexShrink: 0,
    marginBottom: 24,
}


export const TvShowList = () => {
    const [ list, setList ] = useState([]);
    const [ page, setPage ] = useState(1);

    const classes = useStyles()

    useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
        fetchMovies()
        scrollToTop()
    }, [page])
    const fetchMovies = () => {
        fetch(`${TMD_URL}${DISCOVER_PATH}tv?${TMD_API_KEY}&page=${page}`)
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

    return (
        <div className="tv-shows">
            <Typography 
            variant='subtitle2' 
            component='span' 
            style={{'margin': '16px', 'display': 'inline-block'}}>
                Current page: {page}
            </Typography>
            <Button 
            onClick={backPage} 
            variant='contained' 
            color='primary' 
            style={{'marginRight': '16px'}}>
                back
            </Button>
            <Button 
            onClick={nextPage} 
            variant='contained' 
            color='primary'>
                next
            </Button>
            <List type='tv' list={list}/>
            {/* {list.map((item) => (
                <Link to={`/tv/${item.id}` }
                style={cardLinkStyles}
                key={item.id}>
                    <Card 
                    className={classes.card}>
                        {item.poster_path && 
                            <CardMedia 
                            image={`${TMD_IMG_URL}w300${item.poster_path}`} 
                            title="poster"
                            className={classes.media}/>
                        }
                        <Typography variant='h5' component='h3' className={classes.movieTitle}>
                            {item.name}
                        </Typography>
                        <Typography variant='subtitle2' component='span' className={classes.inlineSubtitle}>
                            Votes:
                        </Typography>
                        <Typography variant='body2' component='span'>
                            {item.vote_average}
                        </Typography>
                        <Typography variant='subtitle2' component='p'>
                            Discription:
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {item.overview}
                        </Typography>
                    </Card>
                </Link>
            ))} */}
            <Box className={classes.buttonBox}>
                <Button onClick={backPage} variant='contained' color='primary' style={{'marginRight': '32px'}}>
                    back
                </Button>
                <Button onClick={nextPage} variant='contained' color='primary'>
                    next
                </Button>
            </Box>
        </div>
    )
}