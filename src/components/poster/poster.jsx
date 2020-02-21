import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

import { TMD_IMG_URL } from '../../constants'

const useStyles = makeStyles({
    media: {
        width: 200,
        height: 300,
        marginBottom: 8,
    }
})

export const Poster = ({posterPath}) => {
    
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