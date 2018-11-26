import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { Content, SideBar, NavBar } from './components';
import { NewNavBar, Menu, Content } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <div className="app">
      <NewNavBar />
      <Menu />
      <Content />
    </div>
  </BrowserRouter>
);

export default app;
