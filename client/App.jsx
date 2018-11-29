import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar, Menu } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <Menu />
    </>
  </BrowserRouter>
);

export default app;
