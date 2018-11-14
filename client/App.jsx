import React from 'react';

import { Header, Footer, TestStatefullComponent, LinkListPage } from './components';
import './App.scss';

const app = () => (
  <div className="app">
    <Header />
    <TestStatefullComponent />
    <LinkListPage />
    <Footer />
  </div>
);

export default app;
