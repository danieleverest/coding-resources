import React from 'react';
import ReactDOM from 'react-dom';

import { Header, Footer } from './components';

import './App.scss';

ReactDOM.render(
  <div className="app">
    <Header />
    {/* Only using this for Header; will delete */}
    <main style={{ marginTop: '64px' }}>
      <p>Add content here!!!</p>
    </main>
    <Footer />
  </div>,
  document.getElementById('root'),
);
