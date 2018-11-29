import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.scss';

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
    };
  }

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="grow">Programming Reference Site</Typography>
          {auth && (
          <div>
            <IconButton aria-owns={open ? 'menu-appbar' : undefined} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem><NavLink to="/login">Login</NavLink></MenuItem>
              <MenuItem><NavLink to="/sign-up">Sign up</NavLink></MenuItem>
              <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
              <MenuItem><NavLink to="/link">Link</NavLink></MenuItem>
              <MenuItem><NavLink to="/link-list">Link List</NavLink></MenuItem>
              <MenuItem><NavLink to="/link-submit">Submit Link</NavLink></MenuItem>
              <MenuItem><NavLink to="/adasda">Error 404</NavLink></MenuItem>
            </Menu>
          </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default MenuAppBar;
