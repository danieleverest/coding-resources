import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Content, SideBar, NavBar } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
{/* Using SideBar to wrap components */}
    <SideBar>
      <div className="app">
        <NavBar />
        <Content />
      </div>
    </SideBar>
  </BrowserRouter>
);

export default app;
