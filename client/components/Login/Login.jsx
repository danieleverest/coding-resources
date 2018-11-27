import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper, Avatar, Grid, TextField, Button, Typography, Divider } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './Login.scss';

const styles = theme => ({
  main: {
    flexGrow: 1,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
});

const login = (props) => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={11}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign in
          </Typography>
          <div>
            <form action="/login" method="POST" className={classes.form}>
              <div>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className="form-row"
                  type="email"
                  name="email"
                  autoComplete="email"
                  style={{ width: 300 }}
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  className="form-row"
                  type="password"
                  style={{ width: 300 }}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                Log In
                </Button>
              </div>
            </form>
            <Divider className="form-spacer" />
            <form method="GET" action="/register">

              {/* Added remember me checkbox */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Typography
                variant="h6"
                className="form-spacer"
              >
              Don&apos;t have an account?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
              >
              Register
              </Button>
            </form>
          </div>
        </Paper>
      </Grid>
    </Grid>

  );
};

login.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(login);
