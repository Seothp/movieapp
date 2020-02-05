import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    searchedItems: {
        position: 'absolute',
        bottom: -1,
        right: 0,
        width: 270
    }
})

export const SearchedItems = ({list}) => {
    
    const classes = useStyles();

    return (
        <>
            {list &&
                <Grid container className={classes.searchedItems}>
                    {list.map(item => (
                        <div className="search-item">
                            {item.title}
                        </div>
                    ))}
                </Grid>
            }
        </>
    )
}

