import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Yasir Aziz. Built with React.js
        </p>
        <div className="footer-links">
          <a 
            href="https://github.com/Yasir-Aziz000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yasir-aziz-a99041235" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:ahmed.yasir3000@gmail.com" 
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
