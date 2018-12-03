import React from 'react';
import PropTypes from 'prop-types';
import { ResourceList } from '../Resources';
import api from '../../api';

class ResourceListC extends React.Component {
  state = {
    resources: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchResources();
  }

  componentDidUpdate(prevProps) {
    const { cat: prevCat } = prevProps.match.params;
    const { match: { params: { cat: currCat } } } = this.props;
    if (prevCat !== currCat) this.fetchResources();
  }

  async fetchResources() {
    const { match: { params: { cat } } } = this.props;
    const { resources } = await api.getResources(cat);
    if (resources) {
      this.setState({
        resources,
        loading: false,
      });
    } else {
      this.setState({
        error: 'Unable to fetch resources',
        loading: false,
      });
    }
  }

  render() {
    const { resources, loading, error } = this.state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return <ResourceList resources={resources} />;
  }
}

ResourceListC.propTypes = { match: PropTypes.any };

export default ResourceListC;
