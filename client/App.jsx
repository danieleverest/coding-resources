import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { SideBar, NavBar } from './components';
import './App.scss';

const app = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <NavBar />
        <SideBar />
        {/* <main>

        </main> */}
      </div>
    </Switch>
  </BrowserRouter>
);

export default app;

{/* <Route path="/" exact component={SideBar} /> */}
