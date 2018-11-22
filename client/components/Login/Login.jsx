import React from 'react';
import { TextField, Button, Typography, Divider } from '@material-ui/core';
import './Login.scss';

const login = () => (
  <div>
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
          color="primary"
        >
          Log In
        </Button>
      </div>
    </form>
    <Divider className="form-spacer" />
    <form method="GET" action="/register">
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
);

export default login;
