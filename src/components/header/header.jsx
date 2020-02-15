import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Box, TextField, Button, MenuItem } from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles';

import { TMD_URL, TMD_API_KEY, TMD_IMG_URL } from '../../constants'

import { SearchedItems } from '../searched-items/searched-items'

const areas = [
    { value: 'Movies' },
    { value: 'Tv' }
]


const useStyles = makeStyles({
    header: {
        marginBottom: 24,
        position: 'relative'
    },
    ml2: {
        marginLeft: 16,
    },
    mt2: {
        marginTop: 16,
    },
    select: {
        width: 100,
    },
    button: {
        marginTop: 16,
        marginLeft: 16,
    }
})
export const Header = () => {

    const classes = useStyles();

    return (
        <Box component='header' className={`header ${classes.header}`}>
            <Box component='nav' m={2}>
                <ul className="main-nav">
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/movies'>Movies</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/tv'>TV-Show</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/search'>Search</NavLink>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}