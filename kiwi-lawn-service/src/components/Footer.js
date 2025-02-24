import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Kiwi Lawn Services. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;