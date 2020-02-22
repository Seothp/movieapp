import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import { Poster } from '../poster/poster' 
import { TMD_URL, TMD_API_KEY } from '../../constants'

export const TvSeason = () => {
    let [ tvSeason, seTvSeason ] = useState({})
    const { id, season_number } = useParams()

    useEffect(() => {
        fetch(`${TMD_URL}tv/${id}/season/${season_number}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                seTvSeason(result);
            })
    }, [id, season_number])

    return (
        <Box className="tv-season">
            {tvSeason && 
                <Grid container >
                    <Poster posterPath={tvSeason.poster_path}/>
                <Box className="movie-text-info" style={{maxWidth: 900, marginLeft: 16}}>
                    <h3 className="tv-season-name">
                        {tvSeason.name}
                    </h3>
                    <div className="tv-season-discr">
                        <b>Discription:</b>
                        <p>{tvSeason.overview? tvSeason.overview: 'Not found'}</p>
                    </div>
                </Box>
            </Grid>
            }
        </Box>
    )    
}