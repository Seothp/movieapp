import React, { useState, useEffect } from 'react';
import { TMD_URL, DISCOVER_PATH, TMD_API_KEY } from '../../constants'
import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        boxSizing: 'border-box',
        width: 280,
        padding: 24,
        flexGrow: 0,
        flexShrink: 0,
        marginBottom: 24,
    },
    media: {
        width: 200,
        height: 300,
        marginBottom: 8,
    },
});

export const MoviesList = () => {
    const [ lists, setLists ] = useState([]);

    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = () => {
        fetch(`${TMD_URL}${DISCOVER_PATH}movie?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLists(result.results);
            })
    }
    const classes = useStyles()
    return (
        <Grid 
        className='movie-list'
        container
        direction="row"
        justify="space-around"
        >
            {lists.map((item) => (
                <Card 
                key={item.id}
                className={classes.card}>
                    {item.poster_path && 
                        <CardMedia 
                        image={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
                        title="poster"
                        className={classes.media}/>
                    }
                    <Typography variant='h5' component='h3'>
                    {item.title}
                    </Typography>
                </Card>
            ))}
        </Grid>
    )
}