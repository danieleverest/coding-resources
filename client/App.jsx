import React from 'react';
import Sidebar from 'react-sidebar';
import { NavBar, Main, Categories } from './components';
import api from './api';
import './App.scss';

const mql = window.matchMedia('(min-width: 600px)');

class App extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: true,
    categories: [],
  };

  async componentDidMount() {
    const { categories } = await api.getCategories();
    this.setState({ categories });
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = open => this.setState({ sidebarOpen: open })

  mediaQueryChanged = () => this.setState({
    sidebarDocked: mql.matches,
    sidebarOpen: false,
  })

  render() {
    const { sidebarOpen, sidebarDocked, categories } = this.state;

    return (
      <>
        <NavBar />
        <Sidebar
          sidebar={<Categories categories={categories} />}
          open={sidebarOpen}
          docked={sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          rootClassName="sidebarRoot"
        >
          <Main categories={categories} />
        </Sidebar>
      </>
    );
  }
}

export default App;
