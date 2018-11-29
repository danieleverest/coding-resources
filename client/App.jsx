import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar, Main } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <Main />
    </>
  </BrowserRouter>
);

export default app;
