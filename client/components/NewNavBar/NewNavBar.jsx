import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './NewNavBar.scss';

// DONT FORGET TO CHANGE NewNavBar file name!


const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
});


const NewNavBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Programming Reference Site
          </Typography>
          <Button><NavLink className="link" to="/login">Login</NavLink></Button>
          <Button><NavLink className="link" to="/sign-up">Sign up</NavLink></Button>
          <Button><NavLink className="link" to="/">Home</NavLink></Button>
          <Button><NavLink className="link" to="/link">Link</NavLink></Button>
          <Button><NavLink className="link" to="/link-list">Link List</NavLink></Button>
          <Button><NavLink className="link" to="/link-submit">Submit Link</NavLink></Button>
          <Button><NavLink className="link" to="/adasda">Error 404</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NewNavBar.propTypes = {
  classes: PropTypes.shape({}),
};

export default withStyles(styles)(NewNavBar);