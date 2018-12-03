import React from 'react';
import { Register } from '../Auth';

import api from '../../api';

class RegisterHOC extends React.Component {
  state = { errors: [] };

  register = ({ username, email, password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      this.setState({ errors: ['Passwords must match'] });
    } else {
      api
        .register({
          username,
          email,
          password,
        })
        .then((res) => {
          if (res.success) {
            this.props.history.push('/');
          } else {
            this.setState({ errors: res.errors });
          }
        })
        .catch((error) => {
          this.setState({ errors: [error.message] });
        });
    }
  };

  render() {
    const { errors } = this.state;
    return <Register register={this.register} errors={errors} />;
  }
}

export default RegisterHOC;
