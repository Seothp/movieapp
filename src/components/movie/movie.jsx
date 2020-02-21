import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core';

import { TMD_URL, TMD_API_KEY, TMD_IMG_URL } from '../../constants'

export const Movie = () => {
    const [ movie, setMovie ] = useState({})
    const { id } = useParams();

    const fetchMovie = () => {
        fetch(`${TMD_URL}movie/${id}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setMovie(result);
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <Box >
            {movie && 
                <Grid container >
                    <div className="img-wrapper">
                        <img 
                            alt={`${movie.title} poster`}
                            src={`${TMD_IMG_URL}w300${movie.poster_path}`}
                        />  
                    </div>
                    <Box className="movie-text-info" style={{maxWidth: 900, marginLeft: 16}}>
                        <h3 className="title">
                            {movie.title}
                        </h3>
                        <span className="movie-release-date">
                            Release date: {movie.release_date}
                        </span>
                        <p className="movie-runtime">
                            Time(minutes): {movie.runtime}
                        </p>
                        <p className="movie-status">
                            Status: {movie.status}
                        </p>
                        <p className="movie-vote-average">
                            Rating: {movie.vote_average}({movie.vote_count})
                        </p>
                        <p className="movie-tagline">
                            Tagline: {movie.tagline}
                        </p>
                        <p className="movie-revenue">
                            Revenue: ${movie.revenue}
                        </p>
                        <p className="movie-disc">
                            Discription: <br/>{movie.overview}
                        </p>
                    </Box>
                </Grid>
            }
            
        </Box>
    )
}