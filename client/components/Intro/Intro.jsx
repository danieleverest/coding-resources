import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// import './intro.scss';


// Image import here:
// import Image from '../Intro/Testimage.jpg';
// import Image from '.components/Intro/Testimage.jpg';


// NOTES
// Decide whether to keep the card material-ui component design
// Would like to add an image representing "coding resources"

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
    <div>
      <Paper className={classes.root} elevation={1}>

      {/* Add Image */}
      <img src={Image} alt="pic"/>


        <Typography variant="h5">
          Welcome to the Programming Reference Site
        </Typography>
        <Divider />
        <br />
        <Typography>
          This project was created to create a website to help individuals programmers, ranging from novice to advanced, to have a reference site, where specific links, githubs, articles, etc. are listed and recommended by programmers such as yourself!
          We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know what is good or not!
          This website is to help the individual programmers to find the best sources and backed up by other programmers, who have looked into the references themselves!
          Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
        </Typography>
      </Paper>
    </div>
  );
}

intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(intro);

