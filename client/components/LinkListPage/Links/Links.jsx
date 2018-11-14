import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
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
  url: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
};

export default link;
