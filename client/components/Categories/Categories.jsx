import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default ({ categories }) => (
  <List>
    {categories.map(text => (
      <ListItem button key={text}>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);
