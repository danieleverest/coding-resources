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
  NoMatch,
} from '..';

const Main = ({ categories, setLogin }) => (
  <div className="main-content">
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/login" component={props => <Login {...props} setLogin={setLogin} /> } />
      <Route exact path="/register" component={Register} />
      <Route exact path="/link-list" component={LinkListPage} />
      <Route
        exact
        path="/link-submit"
        component={props => <SubmitLink {...props} categories={categories} />}
      />
      <Route exact path="/link" component={IndividualLink} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

Main.propTypes = {
  categories: PropTypes.array,
  login: PropTypes.func,
  logout: PropTypes.func,
}

export default Main;
