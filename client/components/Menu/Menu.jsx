import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Drawer, AppBar, Button, Toolbar, CssBaseline, List, Typography, IconButton, Hidden, ListItem, ListItemText } from '@material-ui/core';
import { Face, Add, Menu } from '@material-ui/icons';

import IndividualLink from '../IndividualLink/IndividualLink';
import LinkListPage from '../LinkListPage/LinkListPage';

const drawerWidth = 240;

const styles = theme => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: { width: `calc(100% - ${drawerWidth}px)` },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: { width: drawerWidth },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  grow: { flexGrow: 1 },
  languagebar: { textAlign: 'center' },
});

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle() {
    const { mobileOpen } = this.state;

    this.setState({ mobileOpen: !mobileOpen });
  }

  render() {
    const { classes, theme, container, title} = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.languagebar}>
          {['JavaScript', 'Python', 'Ruby', 'Swift', 'Java', 'C#', 'SQL', 'PHP', 'C++', 'HTML/CSS'].map(text => (
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
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
              Programming Reference Site
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign up</Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <IndividualLink /> */}
          <LinkListPage />
          <Typography variant="h6">Welcome to the Programming Reference Site</Typography>
          <Typography>
          This project was created to create a website to help individuals programmers, ranging from novice to advanced, to have a reference site, where specific links, githubs, articles, etc. are listed and recommended by programmers such as yourself!
          We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know what is good or not!
          This website is to help the individual programmers to find the best sources and backed up by other programmers, who have looked into the references themselves!
          Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
          </Typography>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  container: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Hidden from '@material-ui/core/Hidden';
// import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/icons/Menu';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 440,
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class ResponsiveDrawer extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes } = this.props;
//     const { mobileOpen } = this.state;
//     // const { links } = this.links;

//     const drawer = (
//       <div>
//         <div className={classes.toolbar} />
//         <Divider />
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.navIconHide}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" noWrap>
//               Test
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Hidden mdUp>
//           <Drawer
//             variant="temporary"
//             open={mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography noWrap>test{'You think water moves fast? You should see ice.'}</Typography>
//         </main>
//       </div>
//     );
//   }
// }

// ResponsiveDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
