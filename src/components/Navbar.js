import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        
            <nav className=" navbar fixed-top navbar-expand-md">
<span className="navbar-brand text-white ">
<p>Onieflix News</p>
</span>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="fa fa-bars  text-white ">

    </span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav d-flex mx-auto text-white">
      <li className="nav-item">
        <Link to='/home' className="nav-link">Home</Link>
      </li>
 
 
      <li className="nav-item">
        <Link to='/news' className="nav-link">
        News
        </Link>
      </li>
     
     
    </ul>
    <ul className=" navbar-nav nav-item">
      <Link to='/post' className="signBtn">
     Create Post &nbsp;
     <i className="fa fa-plus-square fa-1x" aria-hidden="true"></i>

      </Link>
    </ul>
    
  </div>

  
            </nav>
        
    )
}

export default Navbar
