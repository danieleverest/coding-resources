import React from 'react';

import { Header, Footer, TestStatefullComponent } from './components';
import './App.scss';

const app = () => (
  <div className="app">
    <Header />
    <TestStatefullComponent />
    <Footer />
  </div>
);

export default app;
