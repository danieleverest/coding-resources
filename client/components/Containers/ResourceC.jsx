import React from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import { Resource } from '../Resources';

class ResourceC extends React.Component {
  state = {
    loading: true,
    error: null,
    resource: null,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const res = await api.getOneResource(id);
    if (res.success) {
      this.setState({
        resource: res.resource,
        loading: false,
      });
    } else {
      this.setState({
        error: 'Unable to fetch resource',
        loading: false,
      });
    }
  }

  render() {
    const { resource, loading, error } = this.state;
    const { match: { params: { id } } } = this.props;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return <Resource resource={resource} id={id} />;
  }
}

ResourceC.propTypes = { match: PropTypes.any };

export default ResourceC;
