import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, TextField, Button, Typography, Divider, CssBaseline } from '@material-ui/core';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import './Register.scss';
import api from '../../api';

// Adding styles

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

const Register = (props) => {
  const { classes } = props;

  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const {
      username: { value: username },
      email: { value: email },
      emailConfirm: { value: emailConfirm },
      password: { value: password },
      passwordConfirm: { value: passwordConfirm },
    } = form.elements;

    if (email === emailConfirm && password === passwordConfirm) {
      api.register({
        username,
        email,
        password,
      })
        .then((res) => {
          console.log(res);
          form.reset();
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={10}>

        {/* Adding icon */}
        <Avatar className={classes.avatar}>
          <AssignmentInd />
        </Avatar>

        <form onSubmit={register}>
          <div>
            <TextField
              required
              id="username"
              label="Username"
              className="form-row"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="email"
              label="Email"
              className="form-row"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="emailConfirm"
              label="Confirm Email"
              className="form-row"
              type="email"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="password"
              label="Password"
              className="form-row"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="passwordConfirm"
              label="Confirm Password"
              className="form-row"
              type="password"
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
              Register Account
            </Button>
          </div>
          <br />
          <Divider />
        </form>
        <Divider className="form-spacer" />
        <form method="GET" action="/login">
          <Typography
            variant="h6"
            className="form-spacer"
          >
            Already have an account?
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
          >
            Log In
          </Button>
        </form>
      </Paper>
    </div>
  );
};

Register.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Register);
