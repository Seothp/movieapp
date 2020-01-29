import React from 'react';
import { NavLink } from 'react-router-dom'
import { Box, TextField, Button } from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        marginBottom: 24,
    },
    ml2: {
        marginLeft: 16,
    }
})
export const Header = () => {
    const classes = useStyles()
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
                </ul>
            </Box>
            <Box className="search-menu" m={2}>
                <TextField type='text' className='search-menu__input'/>
                <Button variant='contained' color='primary' size='small' className={classes.ml2}>Search</Button>
            </Box >
        </Box>
    )
}