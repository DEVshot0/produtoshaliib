import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  return (
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsAppButton;
