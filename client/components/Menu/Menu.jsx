import React from 'react';
import Sidebar from 'react-sidebar';
import api from '../../api';
import { List, ListItem, ListItemText, Grid, Paper } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import './Menu.scss';

import { Intro, Login, Register, LinkListPage, SubmitLink, IndividualLink, NoMatch } from '..';

const mql = window.matchMedia('(min-width: 800px)');

class Menu extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
  };

  componentDidMount() {
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
    const { sidebarOpen, sidebarDocked } = this.state;

    return (
      <Sidebar
        sidebar={(
          <List>
            {['JavaScript', 'Python', 'Ruby', 'Swift', 'Java', 'C#', 'SQL', 'PHP', 'C++', 'HTML/CSS', 'Frameworks', 'General'].map(text => (
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
      >
        <Grid className="grid" container>
          <Grid className="grid" item xs={12}>
            <Paper className="paper" elevation={8}>
              <Switch>
                <Route exact path="/" component={Intro} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={Register} />
                <Route exact path="/link-list" component={LinkListPage} />
                <Route exact path="/link-submit" component={SubmitLink} />
                <Route exact path="/link" component={IndividualLink} />
                <Route component={NoMatch} />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </Sidebar>
    );
  }
}

export default Menu;
