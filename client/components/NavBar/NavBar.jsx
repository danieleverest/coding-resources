import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <AppBar position="absolute" className="z-index">
      <Toolbar>
        <Typography variant="h6" color="inherit" className="grow">Programming Reference Site</Typography>
        <Button><NavLink className="link" to="/login">Login</NavLink></Button>
        <Button><NavLink className="link" to="/sign-up">Sign up</NavLink></Button>
        <Button><NavLink className="link" to="/">Home</NavLink></Button>
        <Button><NavLink className="link" to="/link">Link</NavLink></Button>
        <Button><NavLink className="link" to="/link-list">Link List</NavLink></Button>
        <Button><NavLink className="link" to="/link-submit">Submit Link</NavLink></Button>
        <Button><NavLink className="link" to="/adasda">Error 404</NavLink></Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
