import React from 'react';
import './MapAndText.css';

const MapAndText = () => {
  return (
    <div className="map-and-text-container">
      <div className="text-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="map-section">
        {/* Adicione um iframe do Google Maps */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093996!2d144.9630579155043!3d-37.81627974206709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d0f7f0b61c8!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618924344289!5m2!1sen!2sau" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapAndText;
