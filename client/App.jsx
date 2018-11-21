import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Menu } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Route path="/" exact component={Menu} />
      </div>
    </Switch>
  </BrowserRouter>
);

export default app;
