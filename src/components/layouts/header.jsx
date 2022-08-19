import "../../styles/header.css"

import React from 'react'
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="headerContainer">
      <div id="siteLogo"> 
        <img src="https://rubiktheme.com/demo/rb_davici_demo/img/davici-furniture-store-logo-1614158703.jpg" alt="Logo" />
      </div>
      <div id="links">
        <ul>
          <li><Link className="navBar" to='/'>Home</Link></li>
          <li><Link className="navBar" to='/Products'>Products</Link></li>
          <li><Link className="navBar" to='/Shop'>Shop</Link></li>
          <li><Link className="navBar" to='/Blog'>Blog</Link></li>
          <li><Link className="navBar" to='/ContactUS'>Contact Us</Link></li>
        </ul>
      </div>
      <div id="login">
        <a href="https://google.com">Login</a>
      </div>
    </div>
  )
}
