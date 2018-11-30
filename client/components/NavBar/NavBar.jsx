import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import NavButton from './NavButton';

import './NavBar.scss';

class MenuAppBar extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    setLogout: PropTypes.func,
  };

  state = { anchorEl: null };

  handleClick = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null })

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { isLoggedIn, setLogout } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="grow">
            <NavButton link="/">
              Programming Reference Site
            </NavButton>
          </Typography>
          {
            isLoggedIn ? (
              <NavButton link="/" onClick={setLogout}>Log Out</NavButton>
            ) : (
              <>
                <NavButton link="/login">Log In</NavButton>
                <NavButton link="/register">Sign Up</NavButton>
              </>
            )
          }
          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="inherit"
          >
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
            <MenuItem>
              <NavLink to="/link">Link</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/link-list">Link List</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/link-submit">Submit Link</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/adasda">Error 404</NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MenuAppBar;
