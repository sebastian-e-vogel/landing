
import React from 'react';
import './styles.css';
import Img from '../images/profiles.png'

function FifthSection() {
    return (
      <div className="Container-Fifth">
        <div className="FifthSection">

              <div className="Container-FifthText">
                <div className="Text-FifthSection">
                  <h3>Perfiles de comercios completos</h3>
                  <p>Cada comercio cuenta con su perfil con detalles del mismo para ser visualizado por los usuarios:</p>

                      <div className="LiFifth">
                          <li>
                              <p className="TextBold-Fifth">Servicios</p>
                              <p>Detalle de todos los servicios que brinda con precios incluidos</p>
                          </li>
                          <li>
                              <p className="TextBold-Fifth">Información</p>
                              <p>Detalle de horarios, ubicación y medios de pago</p>
                          </li> 
                          <li>
                              <p className="TextBold-Fifth">Calificación</p>
                              <p>Sistema de comentarios y calificación con fecha y nombre de usuarios</p>
                          </li> 
                      </div>
                </div>
                </div>
            <div className="Img-FifthSection">
            <img src={Img} />
            </div>
      </div>
   </div>
    );
  }
  
  export default FifthSection;

