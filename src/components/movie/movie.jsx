import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box } from '@material-ui/core';

import { TMD_URL, TMD_API_KEY } from '../../constants'

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
        <Box>
            {movie && 
                <div className="movie-info">
                    {movie.title}
                </div>
            }
            
        </Box>
    )
}