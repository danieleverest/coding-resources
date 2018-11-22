import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Intro, Login, Register, LinkListPage, SubmitLink, IndividualLink, NoMatch } from '..';

const content = () => (
  <main style={{ marginTop: '64px' }}>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path="/link-list" component={LinkListPage} />
      <Route exact path="/link-submit" component={SubmitLink} />
      <Route exact path="/link" component={IndividualLink} />
      <Route component={NoMatch} />
    </Switch>
  </main>
);

export default content;
