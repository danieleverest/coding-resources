import React from 'react';
import Menu from './components/Menu/Menu';
import { 
  Footer,
  TestStatefullComponent, 
  LinkListPage } 
from './components';
import './App.scss';


export class Main extends React.Component {
  render() {
    return(
      <div classname="App">
        <Menu/>
        <TestStatefullComponent/>
        <LinkListPage/>
      </div>
    )
  }
};

export default Main;

// const app = () => (
//   <div className="app">
//     <Header />
//     <SideBar />
//     <TestStatefullComponent />
//     <LinkListPage />
//     <Footer />
//   </div>
// );