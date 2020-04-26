import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { TMD_Api } from '../../api'

const useStyles = makeStyles({
    movieTextInfo: {
        maxWidth: '900px',
        marginLeft: '16px'
    }
})
const API = new TMD_Api()
export const TvEpisode = () => {
    let [tvEpisode, setTvEpisode] = useState({})
    const { id, season_number, episode_number } = useParams()
    useEffect(() => {
        API.fetchTvEpisode(id, season_number, episode_number)
            .then(episode => setTvEpisode(episode))
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