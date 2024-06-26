import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/header/logo.png'
import './Header.scss' 

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = (event) => {
      if (isMenuOpen) {
        event.preventDefault();
      }
    };
  
    const body = document.body;
    const html = document.documentElement;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMenuOpen && isMobile) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        body.style.overflow = 'unset';
        html.style.overflow = 'unset';
      }, 600); // Retraso en milisegundos antes de restaurar el scroll
    }
  
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
      body.style.overflow = 'unset';
      html.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return <>
    <header className='container-fluid'>
      <Link to={'/'}>
        <img src={logo} alt="Logo" className='header-logo' />
      </Link>
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
              <Link to={'Resume'} className="menu-nav-link" onClick={closeMenu}>
                <span>
                  <div>Resume</div>
                </span>
              </Link>
            </div>
            <div className="menu-nav-item">
              <Link to={'Projects'} className="menu-nav-link" onClick={closeMenu}>
                <span>
                  <div>Projects</div>
                </span>
              </Link>
            </div>
            <div className="menu-nav-item">
              <Link to={'Contact'} className="menu-nav-link" onClick={closeMenu}>
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


