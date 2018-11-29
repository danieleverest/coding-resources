import React from 'react';
import PropTypes from 'prop-types';

import { Button, Chip, Avatar } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

import './Links.scss';

const link = (props) => {
  const { url, title, tags, votes } = props;

  return (
    <React.Fragment>
      <div className="alignCenter">
        <a href={url} className="linksLink">{title}</a>
      </div>
      <div className="alignCenter">
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
    </React.Fragment>
  );
};

link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  votes: PropTypes.number,
};

export default link;
