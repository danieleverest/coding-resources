import React from 'react';
import Sidebar from 'react-sidebar';
import { List, ListItem, ListItemText } from '@material-ui/core';
import api from '../../api';

const mql = window.matchMedia('(min-width: 800px)');

class Side extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    categories: [],
  };

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ categories });
    mql.addListener(this.mediaQueryChanged);
  }

  async componentWillUnmount() {
    const { mql: mqlState } = this.state;
    mqlState.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = open => this.setState({ sidebarOpen: open })

  mediaQueryChanged = () => this.setState({
    sidebarDocked: mql.matches,
    sidebarOpen: false,
  })

  render() {
    const { sidebarOpen, sidebarDocked, categories } = this.state;
    const { children } = this.props;

    return (
      <Sidebar
        sidebar={(
          <List>
            {categories.map(text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
      )}
        open={sidebarOpen}
        docked={sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ root: { marginTop: '64px' }, sidebar: { width: '17%', background: 'white' } }}
      >{children}
      </Sidebar>
    )
  }
}

export default Side;
