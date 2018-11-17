import React from 'react';
import { Menu } from './components';
import './App.scss';
import LinkListPage from './components/LinkListPage/LinkListPage';


const app = () => (
  <div className="App">
    <Menu />
    <LinkListPage />
  </div>
);

export default app;
