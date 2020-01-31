import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { Header } from '../components/header/header'

const useStyles = makeStyles({
    home: {
        display: 'inline-block',
        marginBottom: '32px',
        fontSize: '32px',
        maxWidth: '720px',
        color: '#444444',
    },
})


export const Home = () => {
    const classes = useStyles();
    return (
        <Container component='div'>
            <Header />
            
            <Box component='main' m={2}>
                <Typography component='p' className={ classes.home } >
                    Hello, it's app for search info about movies or tv shows. You need to choose search area. <br/>
                    Get started:
                </Typography>
                <Box component='div' >
                    <Link to='/movies' className='button main-page-button'>Movies</Link>
                    <Link to='/tv' className='button main-page-button'>TV-Shows</Link>
                </Box>
            </Box>
        </Container>
    )
}

