import React from 'react';
import { Menu, LinkListPage } from './components';
import './App.scss';



const app = () => (
  <Menu>
  <div className="App">
    {/* <Menu /> */}
    <LinkListPage />
  </div>
  </Menu>
);

export default app;
