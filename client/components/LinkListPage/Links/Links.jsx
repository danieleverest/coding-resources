import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button, Chip, Avatar } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

import './Links.scss';

const link = ({ url, title, desc, tags, votes }) => (
  <>
    <h3>{ title }</h3>
    <div>
      <a href={url} className="linksLink">{url}</a>
    </div>
    <p>{ desc }</p>
    <div>
      {tags.map(tag => (
        <Chip
          key={tag}
          className="tag"
          avatar={<Avatar>JS</Avatar>}
          label={tag}
        />
      ))}
    </div>
    <Button className="linkVotes" variant="contained">Upvote: <ThumbUp style={{ margin: '0 10px' }} />{votes}</Button>
  </>
);

link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.array,
  votes: PropTypes.number,
};

export default withRouter(link);
