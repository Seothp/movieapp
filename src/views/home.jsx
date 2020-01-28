import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { TextField, Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Header } from '../components/header/header'

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
    },
    mxw720: {
        maxWidth: '720px'
    },
    clr444: {
        color: '#444444'
    }
})
export const Home = () => {
    const classes = useStyles();
    
    return(
        <Container component='div'>
            <Header classes={classes}/>
            
            <Box component='main' m={2}>
                <Box component='p' className={[classes.mb4, classes.fz4, classes.mxw720, classes.clr444]} >
                    Hello, it's app for search info about movies or tv shows. You need to choose search area. <br/>
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

