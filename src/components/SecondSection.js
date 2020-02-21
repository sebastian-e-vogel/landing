import React from 'react';
import './styles.css';
import Img from '../images/todo-reservas-logo.png'
import Img2 from '../images/banner.png'

function SecondSection() {
    return (
      <div className="Container-Second">
          <div className="SecondSection">
            <div className="Text-SecondSection">
              <img src={Img}/>
              <p>Todo Reservas es una app diseñada para facilitar la reserva de turnos en diferentes rubros, de manera simple y rápida.</p>
            </div>
            <div className="Img-SecondSection">
            <img src={Img2}/>
          </div>
          </div>

      </div>
    );
  }
  
  export default SecondSection;
