import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './Intro.scss';
import image from './image.jpg';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const intro = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>Welcome to the Programming Reference Site</Typography>
      <img src={image} alt="pic" />
      <Divider />
      <br />
      <Typography>
          This project was created to help individual programmers, ranging from begginer to advanced, to have a reference site, where specific links; githubs, articles, etc. are listed and recommended by programmers such as yourself!
          We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know whether something worth your while or not!
          This website was created to help the individual programmers to find the best sources that are backed up by other programmers, who have looked into the references themselves!
          Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
      </Typography>
    </Paper>
  );
};

intro.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(intro);
