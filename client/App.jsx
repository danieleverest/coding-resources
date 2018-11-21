import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Menu } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <div className="App">
      <Menu />
    </div>
  </BrowserRouter>
);

export default app;
