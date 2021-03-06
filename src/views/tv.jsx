import React from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../components/header/header';
import { TvShowList } from '../components/tv-shows-list/tv-shows-list';
import { TvShow } from '../components/tv-show/tv-show';
import { TvSeason } from '../components/tv-season/tv-season';
import { TvEpisode } from '../components/tv-episode/tv-episode'

export const TvShows = () => {
    return (
        <Container component='div'>
            <Header />
            <Switch>
                <Route exact path='/tv' >
                    <TvShowList />
                </Route>
                <Route exact path='/tv/:id' >
                    <TvShow />
                </Route>
                <Route exact path='/tv/:id/season/:season_number' >
                    <TvSeason />
                </Route>
                <Route exact path='/tv/:id/season/:season_number/episode/:episode_number' >
                    <TvEpisode />
                </Route>
            </Switch>
        </Container>
    )
}
