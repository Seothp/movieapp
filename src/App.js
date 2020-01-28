import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './views/home.jsx';
import { Movies } from './views/movies.jsx';
import { TvShows } from './views/tv.jsx';

import { makeStyles } from '@material-ui/core/styles'

import './App.css';


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

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={() => <Home classes={classes} />} />
          <Route path='/movies' component={() => <Movies classes={classes} />} />
          <Route path='/tv' component={() => <TvShows classes={classes} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
