import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logoImg from '../assets/Logo_1.png'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

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
    <nav className={`navbar ${isScrolling ? 'scroll-hide' : ''} ${isDashboard ? 'navbar-dashboard' : ''}`}>
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

        {/* Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''} ${isDashboard ? 'dashboard-menu' : ''}`}>
          {isDashboard ? (
            <>
              <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
              <li><Link to="/career-quiz" onClick={closeMenu}>Career Quiz</Link></li>
              <li><Link to="/explore-careers" onClick={closeMenu}>Explore Careers</Link></li>
              <li><Link to="/colleges" onClick={closeMenu}>Find Colleges</Link></li>
              <li><Link to="/scholarships" onClick={closeMenu}>Scholarships</Link></li>
              <li><Link to="/expert-chat" onClick={closeMenu}>Expert Chat</Link></li>
            </>
          ) : (
            <>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#scholarships" onClick={closeMenu}>Scholarships</a></li>
              <li><Link to="/colleges" onClick={closeMenu}>Colleges</Link></li>
              <li><a href="#jobs" onClick={closeMenu}>Jobs</a></li>
            </>
          )}
        </ul>

        {/* Right Side - Auth Buttons or Profile */}
        <div className="navbar-auth">
          {isDashboard ? (
            <div className="navbar-profile">
              <div className="profile-icon"></div>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn-login" onClick={closeMenu}>Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn-signup" onClick={closeMenu}>Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
