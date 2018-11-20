import React from 'react';
import { TextField, Button, Typography, Divider } from '@material-ui/core';
import './Register.scss';

const register = () => (
  <div>
    <form action="/register" method="POST">
      <div>
        <TextField
          required
          id="standard-name"
          label="Username"
          className="form-row"
          margin="normal"
          variant="outlined"
          style={{ width: 300 }}
        />
      </div>
      <div>
        <TextField
          required
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
          required
          id="outlined-email-input-confirm"
          label="Confirm Email"
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
          required
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
          Register Account
        </Button>
      </div>
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
  </div>
);

export default register;
