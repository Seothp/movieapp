import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { TextField, Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    ml2: {
        marginLeft: '16px',
    },
    mb4: {
        display: 'inline-block',
        marginBottom: '32px',
    },
    fz4: {
        fontSize: '32px'
    }
})
export const Home = () => {
    const classes = useStyles();
    return(
        <Container component='div'>
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
            
            <Box component='main' m={2}>
                <Box component='p' className={classes.mb4, classes.fz4} >
                    Hello, it's app for search info about movies or tv shows. You need to choose search area. 
                    Get started:
                </Box>
                <Box component='div' >
                    <Link to='/movies' className='button main-page-button'>Movies</Link>
                    <Link to='/tvs' className='button main-page-button'>TV-Shows</Link>
                </Box>
            </Box>
        </Container>
    )
}

