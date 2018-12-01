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
} from '..';

const Main = ({ categories, setLogin }) => (
  <div className="main-content">
    <Switch>
      <Route
        path="/login"
        component={props => (
          <Login
            {...props}
            setLogin={setLogin}
          />
        )}
      />
      <Route
        path="/register"
        component={Register}
      />
      <Route
        exact
        path="/resources"
        component={LinkListPage}
      />
      <Route
        path="/link-submit"
        component={props => (
          <SubmitLink
            {...props}
            categories={categories}
          />
        )}
      />
      <Route
        path="/link"
        component={IndividualLink}
      />
      <Route
        exact
        path="/resources/:cat"
        component={LinkListPage}
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
