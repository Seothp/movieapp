import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { Poster } from '../poster/poster'
import { TMD_URL, TMD_API_KEY } from '../../constants'

const useStyles = makeStyles({
    movieTextInfo: {
        maxWidth: '900px',
        marginLeft: '16px'
    }
})

export const TvEpisode = () => {
    let [tvEpisode, setTvEpisode] = useState({})
    const { id, season_number, episode_number } = useParams()
    useEffect(() => {
        fetch(`${TMD_URL}tv/${id}/season/${season_number}/episode/${episode_number}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setTvEpisode(result);
            })
    }, [id, season_number, episode_number])
    const classes = useStyles() 
    return (
        <Box className="tv-season">
            {tvEpisode &&
                <Grid container >
                    <Box className={`movie-text-info ${classes.movieTextInfo}`}>
                        <h3 className="tv-season-name">
                            Title: {tvEpisode.name}
                        </h3>
                        <div className="tv-season-discr">
                            <b>Discription:</b>
                            <p>{tvEpisode.overview ? tvEpisode.overview : 'Not found'}</p>
                        </div>
                    </Box>
                </Grid>
            }
        </Box>
    )
}