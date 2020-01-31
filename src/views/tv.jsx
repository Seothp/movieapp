import React from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import { TvShowList } from '../components/tv-shows-list/tv-shows-list';
import { TvShow } from '../components/tv-show/tv-show';
import { Header } from '../components/header/header';

export const TvShows = () => {
    
    return (
        <Container component='div'>
            <Header />
            <Switch>
                <Route exact path='/tv' >
                    <TvShowList />
                </Route>
                <Route path='/tv/:id' >
                    <TvShow />
                </Route>
            </Switch>
        </Container>
    )
}
