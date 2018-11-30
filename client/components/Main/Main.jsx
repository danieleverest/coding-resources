import React from 'react';
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

export default ({ categories }) => (
  <div className="main-content">
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/login" component={Login} />
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
