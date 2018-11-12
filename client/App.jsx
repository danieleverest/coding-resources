import React from 'react';

import { Header, Footer } from './components';
import './App.scss';

const app = () => (
  <div className="app">
    <Header />
    <main style={{ marginTop: '64px' }}>
      <p>Add content here!!!</p>
    </main>
    <Footer />
  </div>
);

export default app;
