import React from 'react';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/LockOutlined';
import {
  Checkbox,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Divider,
} from '@material-ui/core';
import './Login.scss';

const login = () => (
  <>
    <Avatar>
      <LockIcon />
    </Avatar>
    <form>
      <div>
        <TextField
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
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </div>
    </form>

    <form>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </form>

    <Divider className="form-spacer" />

    <Typography variant="h6" className="form-spacer">
      Don&apos;t have an account?
    </Typography>
    <Button variant="contained" color="secondary">
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">
        Register
      </Link>
    </Button>
  </>
);

export default login;
