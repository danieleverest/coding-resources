import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';

const CategoryList = ({ categories }) => (
  <List>
    {categories.map(text => (
      <ListItem button key={text}>
        <Link to={`/resources/c/${text}`}>
          <ListItemText primary={text} />
        </Link>
      </ListItem>
    ))}
  </List>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
