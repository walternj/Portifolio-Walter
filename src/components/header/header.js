import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'
const Header = (props) => {

  return (
    <div className="containerHeader">
      <div className="brand">
        <p id="logo"></p>
        <div>
          <p>Walter NUNES JUNIOR</p>
          <p ><span>web & mobile</span><span id="dev"> developer</span></p>
        </div>
        
      </div>
      <nav className="menu">
          <NavLink activeClassName="main-nav-active"  className="links" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/works">
            Works
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/cv">  
            CV
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/about_me">
            About me
          </NavLink>
        </nav>
    </div>
  );
}

export default Header;
