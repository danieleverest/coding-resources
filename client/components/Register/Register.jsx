import React from 'react';
import { TextField, Button, Typography, Divider, FormHelperText } from '@material-ui/core';
import './Register.scss';
import api from '../../api';

const Register = () => {

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
    <div>
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
};

export default Register;
