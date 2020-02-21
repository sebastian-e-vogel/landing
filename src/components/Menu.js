import React from 'react';
import './styles.css';
import Img from '../images/logo-orbit.png'

function Menu() {
  return (
    <div className="Container-Header">
      
      <header className="Header">
        <div>
        <img src={Img} className="logo"/>
        </div>
        <div className="Menu">
          <nav className="nav">
            <a href="#">Que hacemos</a>
            <a href="#">Como lo hacemos</a>
            <a href="#">Portfolio</a>
            <a href="#">Contacto</a>
          </nav>
          <div className="idioma">
            <button>EN</button>
            |
            <button>ES</button>
          </div>

        </div>
          
      </header>
    </div>
  );
}

export default Menu;


