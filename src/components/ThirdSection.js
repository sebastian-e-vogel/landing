import React from 'react';
import './styles.css';
import Img from '../images/needs-01.png'
import Img2 from '../images/needs-02.png'
import Img3 from '../images/needs-03.png'


function ThirdSection() {
    return (
        <div className="Container-Third">
        <div className="ThirdSection">
          <div className="Text-ThirdSection">
            <h3>Research con usuarios</h3>
            <p>Se analizó la información cualitativa extraída de las entrevistas de usuarios
              <br/> y se llegó a la conclusión de las necesidades que estos tenían</p>
          </div>
          <div className="Items-Third"> 
            <div className="Items1"> 
            <img src={Img} />
                    <p>Perdida de tiempo en filas</p>
            </div>
            <div className="Items2"> 
            <img src={Img2} />
            <p>Falta de información de los comercios</p>
            </div>
            <div className="Items3"> 
            <img src={Img3} />
            <p> Depender de muchas apps de reservas</p>
            </div>

          </div>
        </div>

    </div>
    )
}
  
export default ThirdSection;