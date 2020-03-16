import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-menu_name">
        Ryunoshin (Lou) Takahashi
      </div>
      <div className="nav-menu_items">
        <div className="nav-menu_item">
          <Link to='/' >Home</Link>
        </div>
        <div className="nav-menu_item">
          <Link to='/experience'>Experience</Link>
        </div>
        <div className="nav-menu_item">
          <Link to='/projects'>Projects</Link>
        </div>
        {/* <div className="nav-menu_item">
          <Link to='/blog'>Blog</Link>
        </div> */}
        <div className="nav-menu_item">
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;
