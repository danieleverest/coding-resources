import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar, Menu, Content } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <Fragment>
      <div className="app">
        <NavBar />
        <Menu />
        <Content />
      </div>
    </Fragment>
  </BrowserRouter>
);

export default app;
