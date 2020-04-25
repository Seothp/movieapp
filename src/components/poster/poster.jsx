import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

import { TMD_IMG_URL } from '../../constants'



export const Poster = ({ posterPath, width, height }) => {
    const useStyles = makeStyles({
        media: {
            width: width ? width : 200,
            height: height ? height : 300,
            margin: '0, auto',
            marginBottom: 8,
        }
    })
    const classes = useStyles();
    return (
        <CardMedia
            src={`${TMD_IMG_URL}w300${posterPath}`}
            onError={(e) => e.target.src = 'https://imgur.com/Ax000FS.png'}
            title="poster"
            className={classes.media}
            component='img'
        />
    )
}