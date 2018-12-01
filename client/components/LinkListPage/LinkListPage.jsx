import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links/Links';
import api from '../../api';
import './LinkListPage.scss';

class ResourceList extends React.Component {
  state = { resources: [] };

  componentDidMount() {
    this.fetchResources();
  }

  componentDidUpdate(prevProps) {
    const { cat: prevCat } = prevProps.match.params;
    const { cat: currCat } = this.props.match.params;
    if (prevCat !== currCat) this.fetchResources();
  }

  async fetchResources() {
    const { cat } = this.props.match.params;
    const { resources } = await api.getResources(cat);
    this.setState({ resources });
  }

  render() {
    const { resources } = this.state;
    return (
    <>
      {resources.length
        ? resources.map(r => (
          <Links
            key={r._id}
            id={r._id}
            title={r.name}
            url={r.link}
            tags={r.tags}
            votes={r.rank}
          />
        ))
        : <div>Nothing found</div>
      }
    </>
    );
  }
}

ResourceList.propTypes = { match: PropTypes.any };

export default ResourceList;
