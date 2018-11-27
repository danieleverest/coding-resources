import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Intro, Login, Register, LinkListPage, SubmitLink, IndividualLink, NoMatch } from '..';

// Notes

// Tried to add withStyles code in content,
// no changes were made once the code was added.
// possibly have to add styles in to each component?
// added styles to intro


const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

const content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main style={{ marginTop: '64px' }} className={classes.content}>
        <Switch className={classes.toolbar}>
          <Route exact path="/" component={Intro} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={Register} />
          <Route exact path="/link-list" component={LinkListPage} />
          <Route exact path="/link-submit" component={SubmitLink} />
          <Route exact path="/link" component={IndividualLink} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
}

content.propTypes = { 
  classes: PropTypes.shape({}),
};

export default withStyles(styles, { withTheme: true })(content);

