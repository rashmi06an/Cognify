import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logoImg from '../assets/Logo_1.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsScrolling(false)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolling(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`navbar ${isScrolling ? 'scroll-hide' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand Section */}
        <div className="navbar-brand">
          <img src={logoImg} alt="Cognify Logo" className="navbar-logo" />
          <h1>Cognify</h1>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Middle Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#scholarships" onClick={closeMenu}>Scholarships</a></li>
          <li><a href="#colleges" onClick={closeMenu}>Colleges</a></li>
          <li><a href="#jobs" onClick={closeMenu}>Jobs</a></li>
        </ul>

        {/* Right Side - Auth Buttons */}
        <div className="navbar-auth">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
