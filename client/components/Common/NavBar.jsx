import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavButton from './NavButton';

import './NavBar.scss';

const MenuAppBar = ({ isLoggedIn, logout }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" className="grow">
        <NavButton link="/">Programming Reference Site</NavButton>
      </Typography>
      { isLoggedIn
        ? (
          <>
            <NavButton link="/submit-resource">
              Submit Resource
            </NavButton>
            <NavButton link="/" onClick={logout}>
              Log Out
            </NavButton>
          </>
        )
        : (
          <>
            <NavButton link="/login">Log In</NavButton>
            <NavButton link="/register">Sign Up</NavButton>
          </>
        )
      }
    </Toolbar>
  </AppBar>
);

MenuAppBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

export default MenuAppBar;
