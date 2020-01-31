import React, { useState, useEffect } from 'react';
import { TMD_URL, DISCOVER_PATH, TMD_API_KEY, TMD_MOVIE_IMG_URL } from '../../constants'
import { Card, CardMedia, Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


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
    


export const MoviesList = () => {
    const [ lists, setLists ] = useState([]);
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
                setLists(result.results);
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
            <Grid 
            className='movie-list'
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
            >
                {lists.map((item) => (
                    <Link to={`/movies/${item.id}` }
                    style={cardLinkStyles}
                    key={item.id}>
                        <Card 
                        className={classes.card}>
                            {item.poster_path && 
                                <CardMedia 
                                image={`${TMD_MOVIE_IMG_URL}w300${item.poster_path}`} 
                                title="poster"
                                className={classes.media}/>
                            }
                            <Typography variant='h5' component='h3' className={classes.movieTitle}>
                            {item.title}
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
                ))}
            </Grid>
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