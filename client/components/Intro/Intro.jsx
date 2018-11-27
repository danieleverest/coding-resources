import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import './Intro.scss';
import image from './image.jpg';

// Adding styles
// no changes, still same issue
// content is not being responsive

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    margin: 0,
    paddingTop: '64px',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  media: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const intro = (props) => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={8}>
          <Typography variant="h5" align="center">
          Welcome to the Programming Reference Site
          </Typography>
          <img src={image} alt="pic" width="500px" className={classes.media} />
          <Divider />
          <br />
          <Typography variant="subtitle1" className={classes.content}>
            This project was created to help individual programmers, ranging from begginer to advanced, to have a reference site, where specific links; githubs, articles, etc. are listed and recommended by programmers such as yourself!
            We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know whether something worth your while or not!
            This website was created to help the individual programmers to find the best sources that are backed up by other programmers, who have looked into the references themselves!
            Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

intro.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(intro);
