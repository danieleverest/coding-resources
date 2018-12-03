import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Chip } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

import './Resource.scss';

const ResourceListItem = ({ id, url, title, tags, votes }) => (
  <>
    <h3>
      <Link to={`/resources/${id}`}>{title}</Link>
    </h3>
    <div>
      <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
    <div>
      {tags.map(tag => (
        <Chip
          key={tag}
          className="tag"
          label={tag}
        />
      ))}
    </div>
    <Button className="linkVotes" variant="contained">
      Upvote: <ThumbUp style={{ margin: '0 10px' }} />
      {votes}
    </Button>
  </>
);

ResourceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  votes: PropTypes.number,
};

export default ResourceListItem;
