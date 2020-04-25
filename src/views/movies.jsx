import React from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../components/header/header';
import { MoviesList } from '../components/movies-list/movies-list';
import { Movie } from '../components/movie/movie'

export const Movies = ({ classes }) => {

    return (
        <Container component='div'>
            <Header classes={classes} />
            <Switch>
                <Route exact path='/movies' >
                    <MoviesList />
                </Route>
                <Route path='/movies/:id' >
                    <Movie />
                </Route>
            </Switch>
        </Container>
    )
}
