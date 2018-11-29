import React from 'react';
import { Checkbox, Avatar, TextField, Button, Typography, Divider, FormControlLabel } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

import './Login.scss';

const login = () => (
  <>
    <Avatar>
      <LockIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <form action="/login" method="POST">
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
          color="primary">
            Log In
        </Button>
      </div>
    </form>

    <Divider className="form-spacer" />
    <form method="GET" action="/register">
      <FormControlLabel
        control={(
          <Checkbox
            value="remember"
            color="primary"
          />
        )}
        label="Remember me"
      />
      <Typography variant="h6" className="form-spacer">
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
  </>
);

export default login;
