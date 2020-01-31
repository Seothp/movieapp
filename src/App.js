import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './views/home.jsx';
import { Movies } from './views/movies.jsx';
import { TvShows } from './views/tv.jsx';


import './App.css';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies' component={Movies} />
          <Route path='/tv' component={TvShows} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
