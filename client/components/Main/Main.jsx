import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import {
  Intro,
  Login,
  Register,
  LinkListPage,
  SubmitLink,
  IndividualLink,
  EditResource,
} from '..';

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

const Main = ({ categories, setLogin }) => (
  <div className="main-content">
    <Switch>
      <Route
        path="/login"
        render={props => (
          <Login
            {...props}
            setLogin={setLogin}
          />
        )}
      />
      <Route
        path="/register"
        render={props => <Register {...props} />}
      />
      <Route
        exact
        path="/resources"
        render={LinkListPage}
      />
      <Route
        path="/link-submit"
        render={props => (
          <SubmitLink
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
          <EditResource
            {...props}
            categories={categories}
            defaultTags={defaultTags}
          />
        )}
      />
      <Route
        exact
        path="/resources/:id"
        render={props => <IndividualLink {...props} />}
      />
      <Route
        exact
        path="/resources/c/:cat"
        render={props => <LinkListPage {...props} />}
      />
      <Route path="/" render={props => <Intro {...props} />} />
    </Switch>
  </div>
);

Main.propTypes = {
  categories: PropTypes.array,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export default Main;
