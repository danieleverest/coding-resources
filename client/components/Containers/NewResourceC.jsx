import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResourceForm } from '../Resources';
import api from '../../api';

class NewResourceC extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    defaultTags: PropTypes.array.isRequired,
    history: PropTypes.any,
  };

  state = { error: null };

  submit = async (resource) => {
    const res = await api.submitResource(resource);
    if (res.success) {
      const { history } = this.props;
      history.push(`/resources/${res.resourceId}`);
    } else {
      this.setState({ error: 'Unable to submit' });
    }
  }

  render() {
    const { categories, defaultTags } = this.props;
    const { error } = this.state;

    if (error) return <div>{error}</div>;
    return <ResourceForm submit={this.submit} categories={categories} defaultTags={defaultTags} />;
  }
}

export default NewResourceC;
