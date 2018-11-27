import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemText, InputBase, Drawer, Hidden, CssBaseline, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import { fade } from '@material-ui/core/styles/colorManipulator';

// Search
// import { Search as SearchIcon } from '@material-ui/icons';
// import { fade } from '@material-ui/core/styles/colorManipulator';

// Menu
// import MenuIcon from '@material-ui/icons/Menu';

import './Menu.scss';

const drawerWidth = 220;

const styles = theme => ({
  root: { display: 'flex' },

  // MenuButton
  // menuButton: {
  //   marginRight: 20,
  //   [theme.breakpoints.up('sm')]: { display: 'none' },
  // },

  // Search bar
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': { backgroundColor: fade(theme.palette.common.white, 0.25) },
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit,
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // Menu Drawer
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: { width: drawerWidth },

  // Search Input Space
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': { width: 200 },
    },
  },
  // Part of drawer toolbar theme
  toolbar: theme.mixins.toolbar,
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle() {
    const { mobileOpen } = this.state;

    this.setState({ mobileOpen: !mobileOpen });
  }

  render() {
    const { classes, container } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar} />

        {/* add search code here */}

        <List className={classes.languagebar}>
          {['JavaScript', 'Python', 'Ruby', 'Swift', 'Java', 'C#', 'SQL', 'PHP', 'C++', 'HTML/CSS', 'Frameworks', 'General'].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Forum', 'Creators', 'Contact', 'Setting'].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar> */}
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="permanent"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
  container: PropTypes.shape({}),
  classes: PropTypes.shape({}),
};

export default withStyles(styles, { withTheme: true })(Menu);


// Search Code
// Thinking of adding search input somewhere else
// add code inside of render

{/* <div className={classes.grow} />
<div className={classes.search}>
<div className={classes.searchIcon}>
  <SearchIcon />
</div>
<InputBase
  placeholder="Search…"
  classes={{
    root: classes.inputRoot,
    input: classes.inputInput,
  }}
/>
</div> 
<Divider /> */}