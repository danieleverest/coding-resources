import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Content, SideBar, NavBar } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <div className="app">
      <NavBar />
      <SideBar />
      <Content />
    </div>
  </BrowserRouter>
);

export default app;
