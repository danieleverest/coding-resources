import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';

import './Resource.scss';

const Resource = ({ resource, id }) => {
  return (
    <div className="IndividualLink">
      <div className="container">
        <div className="titleLogoBox">
          <h1>{resource.name}</h1>
          <div>
            <a
              href={`https://${resource.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.link}
            </a>
          </div>
          <div>
            <Link to={`/resources/edit/${id}`}>Edit</Link>
          </div>
          <div>
            {resource.tags.map(tag => (
              <Chip key={tag} className="tag" label={tag} />
            ))}
          </div>
        </div>

        <div className="description">
          <h2>Site Description</h2>
          <p>{resource.desc}</p>
        </div>
        <div className="commentZone">
          <p>Where the comments will go</p>
        </div>
      </div>
    </div>
  );
};

Resource.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
}
export default Resource;
