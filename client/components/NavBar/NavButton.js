import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavButton = ({ link, children }) => (
  <Button>
    <NavLink style={{ color: 'white' }} to={link}>{children}</NavLink>
  </Button>
);

NavButton.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
}

export default NavButton;
