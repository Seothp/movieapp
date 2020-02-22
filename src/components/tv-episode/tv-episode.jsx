import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import { Poster } from '../poster/poster' 
import { TMD_URL, TMD_API_KEY } from '../../constants'

export const TvEpisode = () => {
    let [ tvEpisode, setTvEpisode ] = useState({})
    const { id, season_number, episode_number } = useParams()

    useEffect(() => {
        fetch(`${TMD_URL}tv/${id}/season/${season_number}/episode/${episode_number}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setTvEpisode(result);
            })
    }, [id, season_number, episode_number])

    return (
        <Box className="tv-season">
            {tvEpisode && 
                <Grid container >
                    <Box className="movie-text-info" style={{maxWidth: 900, marginLeft: 16}}>
                        <h3 className="tv-season-name">
                            Title: {tvEpisode.name}
                        </h3>
                        <div className="tv-season-discr">
                            <b>Discription:</b>
                            <p>{tvEpisode.overview? tvEpisode.overview: 'Not found'}</p>
                        </div>
                    </Box>
                </Grid>
            }
        </Box>
    )    
}