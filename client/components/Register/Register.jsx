import React from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar,
  TextField,
  Button,
  Typography,
  Divider
} from '@material-ui/core';
import AssignmentInd from '@material-ui/icons/AssignmentInd';

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
      passwordConfirm: { value: passwordConfirm }
    } = form.elements;

    if (email === emailConfirm && password === passwordConfirm) {
      api
        .register({
          username,
          email,
          password,
        })
        .then(() => form.reset())
        .catch(err => console.error(err));
    }
  };

  return (
    <>
      <Avatar>
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
          <Button type="submit" variant="contained" color="primary">
            Register Account
          </Button>
        </div>
      </form>

      <Divider className="form-spacer" />

      <Typography variant="h6" className="form-spacer">
        Already have an account?
      </Typography>
      <Button variant="contained" color="secondary">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">
          Log In
        </Link>
      </Button>
    </>
  );
};

export default Register;
