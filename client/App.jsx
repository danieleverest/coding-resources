import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar, Menu } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Menu />
    </Fragment>
  </BrowserRouter>
);

export default app;
