import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import { Intro } from '.';
import { Login } from '../Auth';
import {
  RegisterHOC,
  ResourceHOC,
  NewResourceHOC,
  EditResourceHOC,
  ResourceListHOC,
} from '../Containers';

const defaultTags = [
  'OOP',
  'ES5',
  'Sorts',
  'Big O',
  'Refactoring',
  'Map',
  'Learning to Code',
  'Free Sites',
  'Paid Sites',
  'Getting Hired',
];

const Main = ({ categories, login }) => (
  <div className="main-content">
    <Switch>
      <Route
        path="/login"
        render={props => (
          <Login
            {...props}
            login={login}
          />
        )}
      />
      <Route
        path="/register"
        component={RegisterHOC}
      />
      <Route
        exact
        path="/resources"
        component={ResourceListHOC}
      />
      <Route
        path="/submit-resource"
        render={props => (
          <NewResourceHOC
            {...props}
            categories={categories}
            defaultTags={defaultTags}
          />
        )}
      />
      <Route
        exact
        path="/resources/edit/:id"
        render={props => (
          <EditResourceHOC
            {...props}
            categories={categories}
            defaultTags={defaultTags}
          />
        )}
      />
      <Route
        exact
        path="/resources/:id"
        component={ResourceHOC}
      />
      <Route
        exact
        path="/resources/c/:cat"
        component={ResourceListHOC}
      />
      <Route path="/" component={Intro} />
    </Switch>
  </div>
);

Main.propTypes = {
  categories: PropTypes.array,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export default Main;
