import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Token } from './api';
import App from './App';

const token = window.localStorage.getItem('token');
if (token) {
  Token.set(token);
}

ReactDOM.render(
  <BrowserRouter>
    <App loggedIn={Boolean(token)} />
  </BrowserRouter>,
  document.getElementById('root')
);
