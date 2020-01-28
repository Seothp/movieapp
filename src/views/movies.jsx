import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from '../components/header/header';
import { MoviesList } from '../components/movies-list/movies-list';

export const Movies = ({classes}) => {
    
    return (
        <Container component='div'>
            <Header classes={classes}/>
            <MoviesList></MoviesList>
        </Container>
    )
}

