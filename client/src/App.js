import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* Only using this for Header; will delete */}
          <main style={{marginTop: '64px'}}>
            <p>Add content here!!!</p>
          </main>
        <Footer/>
      </div>
    )
  }
}

export default App
