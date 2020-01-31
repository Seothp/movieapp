import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core';

import { TMD_URL, TMD_API_KEY, TMD_IMG_URL } from '../../constants'

export const TvShow = () => {
    const [ tvShow, setTvShow ] = useState({});
    const { id } = useParams();

    const fetchMovie = () => {
        fetch(`${TMD_URL}tv/${id}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setTvShow(result);
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <Box>
            <Box >
            {tvShow && 
                <Grid container >
                    <div >
                        <img 
                        alt={`${tvShow.title} poster`}
                        src={`${TMD_IMG_URL}w300${tvShow.poster_path}`}
                        />  
                    </div>
                    <Box style={{maxWidth: 900, marginLeft: 16}}>
                        <h3 className="title">
                            {tvShow.title}
                        </h3>
                        <span className="tvShow-release-date">
                            First episode: {tvShow.first_air_date}
                        </span>
                        <p className="tvShow-runtime">
                            Episode runtime(minutes): {tvShow.episode_run_time}
                        </p>
                        <p className="tvShow-status">
                            Seasons: {tvShow.number_of_seasons}
                        </p>
                        <p className="tvShow-status">
                            Episodes: {tvShow.number_of_episodes}
                        </p>
                        <p className="tvShow-vote-average">
                            Rating: {tvShow.vote_average}({tvShow.vote_count})
                        </p>
                        <p className="tvShow-disc">
                            Discription: <br/>{tvShow.overview}
                        </p>
                    </Box>
                </Grid>
            }
            </Box>
        </Box>
    )
}