import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
