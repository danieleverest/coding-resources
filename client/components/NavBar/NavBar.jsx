import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const navBar = () => (
  <AppBar style={{ alignItems: 'center' }}>
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
);

navBar.propTypes = { container: PropTypes.shape({}) };

export default navBar;
