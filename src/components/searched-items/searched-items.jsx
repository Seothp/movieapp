import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MoviesSearchList } from '../movies-search-list/movies-search-list';
import { TvShowsSearchList } from '../tv-shows-search-list/tv-shows-search-list';

const useStyles = makeStyles({
    searchedItems: {
        position: 'absolute',
        bottom: -1,
        right: 0,
        width: 270
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
                    <TvShowsSearchList searchValue={searchValue} />
                )
            default:
                return null;
        }
    }
    return (
        <>
            {searchValue &&
                <Grid container className={classes.searchedItems}>
                    {searchValue}
                    {getComponent()}
                </Grid>
            }
        </>
    )
}

