import React from 'react';
import './styles.css';
import Img from '../images/profiles.png'

function SixthSection() {
    return (
      <div className="Container-Sixth">
        <div className="SixthSection">
          <div className="Img-SixthSection">
           <img src={Img} />
          </div>
          <div className="Container-SixthText">
            <div className="Text-SixthSection">
              <h3>Reserva online</h3>
              <p>Para evitar las engorrosas filas desarrollamos un sistema de reserva online donde los usuarios podrán realizar una reserva o pagar el servicios que desean tanto con tarjeta de crédito como en efectivo.</p>
              <p>Los usuarios tendrán todos los detalles de la misma:</p>
              <ul className="List-SixthSection">
                    <li>- Lugar de la reserva </li> 
                    <li>- Dirección del comercio</li> 
                    <li>- Servicio contratado </li> 
                    <li>- Profesional seleccionado</li> 
                    <li>- Fecha y hora de la reserva</li> 
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
  
  export default SixthSection;

