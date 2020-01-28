import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './views/home.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies' component={Home} />
          <Route path='/tv' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
