import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchedItems: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
})

export const SearchedItems = ({searchValue, searchArea}) => {
    
    const classes = useStyles();

    const getComponent = () => {
        switch (searchArea) {
            case 'movies':
                return (
                    <MoviesSearchList searchValue={searchValue} />
                    );
            case 'tv':
                return (
                    <TvShowSearchList searchValue={searchValue} />
                )
            default:
                return null;
        }
    }
    return (
        <Grid container className={classes.searchedItems}>
            {getComponent()}
        </Grid>
    )
}

