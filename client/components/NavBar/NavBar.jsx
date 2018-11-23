import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import './NavBar.scss';

// Added withStyles

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
})

const navBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="displayFlex">
          <Typography variant="h6" color="inherit" noWrap>Programming Reference Site</Typography>
          <React.Fragment>
            <Button><NavLink className="link" to="/login">Login</NavLink></Button>
            <Button><NavLink className="link" to="/sign-up">Sign up</NavLink></Button>
            <Button><NavLink className="link" to="/">Home</NavLink></Button>
            <Button><NavLink className="link" to="/link">Link</NavLink></Button>
            <Button><NavLink className="link" to="/link-list">Link List</NavLink></Button>
            <Button><NavLink className="link" to="/link-submit">Submit Link</NavLink></Button>
            <Button><NavLink className="link" to="/adasda">Error 404</NavLink></Button>
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}

navBar.propTypes = { 
  container: PropTypes.shape({}),
  classes: PropTypes.shape({}),
};

export default withStyles(styles, { withTheme: true })(navBar);
