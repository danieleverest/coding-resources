import React from 'react';
import PropTypes from 'prop-types';
import { ResourceListItem } from '.';
import './ResourceList.scss';

const ResourceList = ({ resources }) => {
  return resources.length
    ? resources.map(r => (
      <ResourceListItem
        key={r._id}
        id={r._id}
        title={r.name}
        url={r.link}
        tags={r.tags}
        votes={r.rank}
      />
    ))
    : <div>No resources found</div>;
}

ResourceList.propTypes = { resources: PropTypes.array.isRequired };

export default ResourceList;
