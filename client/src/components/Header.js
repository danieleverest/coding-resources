import React from 'react'


// creating header template
// not final

class Header extends React.Component {
  render() {
    return(
      <header className="AppBar">
        <nav className="AppBar_Nav">
          <div></div>
          <div className="AppBar_logo"> 
            <a href="/">Coding Resources</a>
          </div>
          <div className="spacer"/>
          <div className="AppBar_select">
            <ul>
              <li><a href="/">Log in</a></li>
              <li><a href="/">Sign up</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;