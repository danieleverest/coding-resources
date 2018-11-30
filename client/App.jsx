import React from 'react';
import Sidebar from 'react-sidebar';
import { NavBar, Main, Categories } from './components';
import api from './api';
import './App.scss';

class App extends React.Component {
  state = {
    categories: [],
    isLoggedIn: false,
  };

  async componentDidMount() {
    const { categories } = await api.getCategories();
    this.setState({ categories });
  }

  setLogin = () => this.setState({ isLoggedIn: true });

  setLogout = () => this.setState({ isLoggedIn: false });

  render() {
    const { categories, isLoggedIn } = this.state;

    return (
      <>
        <NavBar
          isLoggedIn={isLoggedIn}
          setLogout={this.setLogout}
        />
        <Sidebar
          sidebar={<Categories categories={categories} />}
          open
          docked
          rootClassName="sidebarRoot"
        >
          <Main
            categories={categories}
            setLogin={this.setLogin}
          />
        </Sidebar>
      </>
    );
  }
}

export default App;
