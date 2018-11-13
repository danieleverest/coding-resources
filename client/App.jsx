import React from 'react';

import { Header, Footer, TestStatefullComponent } from './components';
import './App.scss';

const app = () => (
  <div className="app">
    <Header />
    <React.Fragment style={{ marginTop: '64px' }}>
      <TestStatefullComponent />
    </React.Fragment>
    <Footer />
  </div>
);

export default app;
