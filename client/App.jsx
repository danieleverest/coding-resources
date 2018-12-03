import React from 'react';
import Sidebar from 'react-sidebar';
import { NavBar, Main, CategoryList } from './components/Common';
import api from './api';
import './App.scss';

class App extends React.Component {
  state = {
    categories: [],
    isLoggedIn: this.props.loggedIn,
  };

  async componentDidMount() {
    const { categories } = await api.getCategories();
    this.setState({ categories });
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  }

  logout = () => {
    api.logout();
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { categories, isLoggedIn } = this.state;

    return (
      <>
        <NavBar
          isLoggedIn={isLoggedIn}
          logout={this.logout}
        />
        <Sidebar
          open
          docked
          rootClassName="sidebarRoot"
          sidebar={<CategoryList categories={categories} />}
        >
          <Main
            categories={categories}
            login={this.login}
          />
        </Sidebar>
      </>
    );
  }
}

export default App;
