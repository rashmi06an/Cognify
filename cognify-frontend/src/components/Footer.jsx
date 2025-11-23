import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <h1 className="footer-logo">COGNIFY</h1>
        </div>

        {/* Vertical Divider */}
        <div className="footer-divider"></div>

        {/* Links Section */}
        <div className="footer-links-container">
          <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#how-to-use">How to Use</a></li>
              <li><a href="#join-us">Join Us</a></li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="footer-divider"></div>

          <div className="footer-column">
            <h4>F.A.Q</h4>
            <ul>
              <li><a href="#faq">F.A.Q</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
              <li><a href="#conditions">Conditions</a></li>
              <li><a href="#licenses">Licenses</a></li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="footer-divider"></div>
        </div>

        {/* Social & Right Section */}
        <div className="footer-right-section">
          <div className="social-icons">
            <a href="#facebook" className="social-link"><FaFacebookF /></a>
            <a href="#twitter" className="social-link"><FaTwitter /></a>
            <a href="#linkedin" className="social-link"><FaLinkedinIn /></a>
            <a href="#youtube" className="social-link"><FaYoutube /></a>
            <a href="#instagram" className="social-link"><FaInstagram /></a>
            <a href="#pinterest" className="social-link"><FaPinterest /></a>
          </div>
          <div className="footer-input-container">
            {/* Placeholder for the rounded input/button area in screenshot */}
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="footer-bottom-bar">
        <div className="contact-item">
          <span className="contact-label">Pay Us a Visit</span>
          <span className="contact-sub">Union St, Seattle, WA 98101, United States</span>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="contact-label">Give Us a Call</span>
          <span className="contact-sub">(110) 1111-1010</span>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="contact-label">Send Us a Message</span>
          <span className="contact-sub">Contact@HydraVTech.com</span>
        </div>
      </div>

      <div className="footer-copyright">
        © 2024 Cognify. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
