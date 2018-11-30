import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';

import { Intro, Login, Register, LinkListPage, SubmitLink, IndividualLink, NoMatch } from '..';

export default ({ categories }) => (
  <Grid className="grid" container>
    <Grid className="grid" item xs={12}>
      <Paper className="paper" elevation={8}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={Register} />
          <Route exact path="/link-list" component={LinkListPage} />
          <Route exact path="/link-submit" component={props => <SubmitLink {...props} categories={categories} />} />
          <Route exact path="/link" component={IndividualLink} />
          <Route component={NoMatch} />
        </Switch>
      </Paper>
    </Grid>
  </Grid>
);
