import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="left-side">
        <div className="left-content">
          <h1>Produtos Haliib</h1>
          <p>Uma massa que contém tradição e muito sabor. Produto natural, sem conservantes e vegano!</p>
          <button>Saiba mais</button>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default MainContent;
