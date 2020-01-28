import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Box } from '@material-ui/core';
import { Header } from '../components/header/header'

export const Home = ({classes}) => {
    
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

