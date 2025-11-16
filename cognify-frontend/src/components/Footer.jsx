import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="#education">Education</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#scholarships">Scholarships</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>TECHNOLOGIES</h4>
            <ul>
              <li><a href="#ai">AI & ML</a></li>
              <li><a href="#analytics">Analytics</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="#facebook" className="social-link">f</a>
            <a href="#twitter" className="social-link">𝕏</a>
            <a href="#linkedin" className="social-link">in</a>
            <a href="#instagram" className="social-link">📷</a>
            <a href="#youtube" className="social-link">▶</a>
            <a href="#discord" className="social-link">◆</a>
          </div>
          <button className="footer-cta">Get Started</button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="footer-contact">
        <a href="tel:+1234567890" className="contact-item">
          <span className="contact-icon">📞</span>
          <span>Give Us a Call</span>
        </a>
        <a href="mailto:info@cognify.com" className="contact-item">
          <span className="contact-icon">✉</span>
          <span>Send Us a Message</span>
        </a>
        <a href="#book-call" className="contact-item">
          <span className="contact-icon">📅</span>
          <span>Pay Us a Visit</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 Cognify. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
