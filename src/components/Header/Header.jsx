import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/header/logo.png'
import './Header.scss' 

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return <>
    <header className='container-fluid'>
      <div>
        <img src={logo} alt="Logo" className='header-logo' />
      </div>
      <input 
        type="checkbox" 
        id="burger-toggle" 
        checked={isMenuOpen} 
        onChange={() => setIsMenuOpen(!isMenuOpen)} 
      />
      <label htmlFor="burger-toggle" className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <div className="menu">
        <div className="menu-inner">
          <div className="menu-nav">
            <div className="menu-nav-item">
              <Link to={'/'} className="menu-nav-link" onClick={closeMenu}>
                <span>
                  <div>Home</div>
                </span>
              </Link>
            </div>
            <div className="menu-nav-item">
              <Link to={'Resume'} className="menu-nav-link"  onClick={closeMenu}>
                <span>
                  <div>Resume</div>
                </span>
              </Link>
            </div>
            <div className="menu-nav-item">
              <Link to={'Projects'} className="menu-nav-link"  onClick={closeMenu}>
                <span>
                  <div>Projects</div>
                </span>
              </Link>
            </div>
            <div className="menu-nav-item">
              <Link to={'Contact'} className="menu-nav-link"  onClick={closeMenu}>
                <span>
                  <div>Contact</div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header


