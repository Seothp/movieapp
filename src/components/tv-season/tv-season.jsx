import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Poster } from '../poster/poster'

import { TMD_Api } from '../../api'

const cardLinkStyles = {
    display: 'flex',
    boxSizing: 'border-box',
    width: '140px',
    textDecoration: 'none',
    flexShrink: 0,
    marginBottom: 24,
}
const useStyles = makeStyles({
    card: {
        boxSizing: 'border-box',
        width: '100%',
        padding: 8,
        flexGrow: 0,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    movieTextInfo: {
        maxWidth: '900px', 
        marginLeft: '16px' 
    }
});
const API = new TMD_Api()
export const TvSeason = () => {
    let [tvSeason, setTvSeason] = useState({})
    const { id, season_number } = useParams()

    useEffect(() => {
        API.fetchTvShowSeason(id, season_number)
            .then(season => setTvSeason(season))
    }, [id, season_number])

    const classes = useStyles()
    return (
        <Box className="tv-season">
            {tvSeason &&
                <>
                    <Grid container >
                        <Poster posterPath={tvSeason.poster_path} />
                        <Box className={`movie-text-info ${classes.movieTextInfo}`} >
                            <h3 className="tv-season-name">
                                {tvSeason.name}
                            </h3>
                            <div className="tv-season-discr">
                                <b>Discription:</b>
                                <p>{tvSeason.overview ? tvSeason.overview : 'Not found'}</p>
                            </div>
                        </Box>
                    </Grid>
                    <Grid
                        container
                        wrap='wrap'
                        justify='space-between'
                    >
                        {tvSeason.episodes && tvSeason.episodes.map(episode => (
                            <Link
                                style={cardLinkStyles}
                                key={episode.id}
                                to={`/tv/${id}/season/${season_number}/episode/${episode.episode_number}`}
                            >
                                <Card className={classes.card}>
                                    <span className="episode-number">Ep: {episode.episode_number}.</span>
                                    <span className="episode-title">{episode.name}</span>
                                </Card>
                            </Link>
                        ))}
                    </Grid>
                </>
            }
        </Box>
    )
}