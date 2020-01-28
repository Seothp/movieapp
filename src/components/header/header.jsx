import React from 'react';
import { NavLink } from 'react-router-dom'
import { Box, TextField, Button } from '@material-ui/core'


export const Header = ({classes}) => {
    return (
        <Box component='header' className='header'>
            <Box component='nav' m={2}>
                <ul className="main-nav">
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/'>Home</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/movies'>Movies</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/tvs'>TV-Show</NavLink>
                    </li>
                </ul>
            </Box>
            <Box className="search-menu" m={2}>
                <TextField type='text' className='search-menu__input'/>
                <Button variant='contained' color='primary' size='small' className={classes.ml2}>Search</Button>
            </Box >
        </Box>
    )
}