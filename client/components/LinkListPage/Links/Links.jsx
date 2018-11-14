import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import './Links.scss';

const link = (props) => {
  const { url, title, tags } = props;

  return (
    <div className="LinkPage">
      <div className="linkContainer">
        <div className="linkTitle">
          <a href={url} className="linksLink">{title}</a>
        </div>
        <div className="linkTags">
          {tags.map(tag => <Button className="tag" variant="outlined" color="primary">{tag}</Button>)}
        </div>
      </div>
    </div>
  );
};

link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.isRequired,
};

export default link;
