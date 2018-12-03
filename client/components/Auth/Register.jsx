import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import {
  Avatar,
  TextField,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';

import './Register.scss';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { register } = this.props;
    register(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.props;
    const { username, email, password, passwordConfirm } = this.state;
    const config = {
      margin: 'normal',
      variant: 'outlined',
      className: 'form-row',
      required: true,
    };
    return (
      <>
        <Avatar>
          <AssignmentInd />
        </Avatar>
        { errors.map(err => <div key={err}>{err}</div>) }
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              name="username"
              label="Username"
              type="text"
              value={username}
              onChange={this.handleChange}
              {...config}
            />
          </div>
          <div>
            <TextField
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={this.handleChange}
              {...config}
            />
          </div>
          <div>
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="password"
              value={password}
              onChange={this.handleChange}
              {...config}
            />
          </div>
          <div>
            <TextField
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              value={passwordConfirm}
              onChange={this.handleChange}
              {...config}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >Register Account
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
  }
}

export default Register;
