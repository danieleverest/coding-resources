import React from 'react';
import PropTypes from 'prop-types';
import { ResourceListItem } from '.';
import './ResourceList.scss';

const ResourceList = ({ resources }) => resources.map(r => (
  <ResourceListItem
    key={r._id}
    id={r._id}
    title={r.name}
    url={r.link}
    tags={r.tags}
    votes={r.rank}
  />
));

ResourceList.propTypes = { resources: PropTypes.array.isRequired };

export default ResourceList;
