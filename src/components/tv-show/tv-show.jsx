import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Box, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Poster } from '../poster/poster';

import { TMD_URL, TMD_API_KEY, TMD_IMG_URL } from '../../constants';

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
    }
});

export const TvShow = () => {
    const [ tvShow, setTvShow ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${TMD_URL}tv/${id}?${TMD_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setTvShow(result);
            })
    }, [id])

    const classes = useStyles();

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
                    <Grid
                        container
                        wrap='wrap'
                        justify='space-between'
                        
                    >
                        {tvShow.seasons && tvShow.seasons.map(season => (
                            <Link style={cardLinkStyles} key={season.id} to={`/tv/${id}/season/${season.season_number}`}>
                                <Card className={classes.card}>
                                    <Poster posterPath={season.poster_path} width={'100%'} height={180}/>
                                    {season.name}
                                </Card>
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            }
            </Box>
        </Box>
    )
}