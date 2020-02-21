import React from 'react';
import './styles.css';
import Img from '../images/search.png'

function FourthSection() {
    return (
      <div className="Container-Fourth">
        <div className="FourthSection">
          <div className="Img-FourthSection">
          <img src={Img} />
          </div>
          <div className="Container-FourthText">
            <div className="Text-FourthSection">
              <h2>Fácil búsqueda de comercios</h2>
              <p className="Number-FourthSection">01</p>
              <p className="TextBold-FourthSection">Listados con todos los comercios adheridos</p>
              <ul className="List-FourthSection">
                    <li>- Puntuación de cada comerio </li> 
                    <li>- Ubicación</li> 
                    <li>- Sistema de comentarios </li> 
              </ul>
            </div>
            <div className="Text-FourthSection">
              <p className="Number-FourthSection">02</p>
              <p className="TextBold-FourthSection">Mapa de búsqueda</p>
              <p>Sistema de geolocalización avanzado</p>
            </div>
            </div>

        </div>

      </div>
    );
  }
  
  export default FourthSection;

