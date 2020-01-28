import React, { useState, useEffect } from 'react';
import { TMD_URL, DISCOVER_PATH } from '../../constants'
import { Box } from '@material-ui/core';


export const MoviesList = () => {
    const [ lists, setLists ] = useState([]);

    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = () => {
        fetch(`${TMD_URL}${DISCOVER_PATH}movie?api_key=5dea54ae7c9d9964e72e2ee872e49402`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLists(result.results);
            })
    }
    
    return (
        <Box className='movie-list'>
            {lists.map((item) => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))}
        </Box>
    )
}