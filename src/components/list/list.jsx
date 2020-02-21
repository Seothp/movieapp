import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { Poster } from '../poster/poster';

const useStyles = makeStyles({
    card: {
        boxSizing: 'border-box',
        width: 280,
        padding: 24,
        flexGrow: 0,
        flexShrink: 0,
    },
    title: {
        marginBottom: 16,
    },
    inlineSubtitle: {
        marginRight: 8,
    }
});

const cardLinkStyles = {
    display: 'flex',
    boxSizing: 'border-box',
    width: '280px',
    textDecoration: 'none',
    flexShrink: 0,
    marginBottom: 24,
}

export const List = ({list, type}) => {
    const classes = useStyles();
    switch (type) {
        case 'movie':
            return (
                <Grid
                    container
                    className={classes.media}
                    wrap='wrap'
                    justify='space-between'
                >
                    {list && list.map( item => (
                        <Link style={cardLinkStyles} key={item.id + String(Date.now())} to={`/movies/${item.id}`}>
                            <Card className={classes.card}>
                                <Poster posterPath={item.poster_path}/>
                                <Typography variant='h5' component='h3' className={classes.title}>
                                    {item.title}
                                </Typography>
                                <Typography variant='subtitle2' component='span' className={classes.inlineSubtitle}>
                                    Votes:
                                </Typography>
                                <Typography variant='body2' component='span'>
                                    {item.vote_average}
                                </Typography>
                                <Typography variant='subtitle2' component='p'>
                                    Discription:
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    {item.overview}
                                </Typography>
                            </Card>
                        </Link>
                    ))}
                </Grid>
            )
        case 'tv':
            return (
                <Grid
                    container
                    wrap='wrap'
                    justify='space-between'
                >
                    {list && list.map( item => (
                        <Link style={cardLinkStyles} key={item.id + String(Date.now())} to={`/tv/${item.id}`}>
                            <Card className={classes.card}>
                                <Poster posterPath={item.poster_path}/>
                                <Typography variant='h5' component='h3' className={classes.title}>
                                    {item.title}
                                </Typography>
                                <Typography variant='subtitle2' component='span' className={classes.inlineSubtitle}>
                                    Votes:
                                </Typography>
                                <Typography variant='body2' component='span'>
                                    {item.vote_average}
                                </Typography>
                                <Typography variant='subtitle2' component='p'>
                                    Discription:
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    {item.overview}
                                </Typography>
                            </Card>
                        </Link>
                    ))}
                </Grid>
            )
        default:
            return null;
    }
}