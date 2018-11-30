import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavButton = ({ link, children, onClick }) => (
  <Button onClick={onClick}>
    <NavLink style={{ color: 'white' }} to={link}>{children}</NavLink>
  </Button>
);

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
