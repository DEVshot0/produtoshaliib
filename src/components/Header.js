import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png'; 
import { FaLock, FaShoppingCart } from 'react-icons/fa';

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header-center">
          <button className="header-button" onClick={() => { alert('fui clickado'); scrollToSection('home'); }}>
            Home
          </button>
          <button className="header-button" onClick={() => { alert('fui clickado'); scrollToSection('products'); }}>
            Produtos
          </button>
          <button className="header-button" onClick={() => { alert('fui clickado'); scrollToSection('about'); }}>
            Quem somos nós
          </button>
          <button className="header-button" onClick={() => { alert('fui clickado'); scrollToSection('contacts'); }}>
            Contatos
          </button>
        </div>
        <div className="header-right">
          <button className="header-button login-button" onClick={() => alert('fui clickado')}>
            <FaLock className="icon" /> Login
          </button>
          <button className="header-button cart-button" onClick={() => alert('fui clickado')}>
            <FaShoppingCart className="icon" />
          </button>
        </div>
        <div className="menu-hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`}>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('home'); }}>
          Home
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('products'); }}>
          Produtos
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('about'); }}>
          Quem somos nós
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('contacts'); }}>
          Contatos
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('login'); }}>
            <FaLock className="icon" /> Login
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); alert('fui clickado'); scrollToSection('market'); }}>
            <FaShoppingCart className="icon" /> Carrinho
        </button>
      </div>
    </div>
  );
};

export default Header;
