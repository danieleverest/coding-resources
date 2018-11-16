import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import './Links.scss';

const link = (props) => {
  const { url, title, tags, votes } = props;

  return (
    <div className="LinkPage">
      <div className="linkContainer">
        <div className="linkTitle">
          <a href={url} className="linksLink">{title}</a>
        </div>
        <div className="linkTags">
          {tags.map(tag => <Button className="tag" variant="outlined" color="primary">{tag}</Button>)}
        </div>
        <div>
          <Button className="linkVotes" variant="contained" color="secondary">
            Votes:
            {votes}
          </Button>
        </div>
      </div>
    </div>
  );
};

link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  votes: PropTypes.number,
};

export default link;
