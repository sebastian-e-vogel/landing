import React from 'react';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'
import Img from '../images/beniar.png'
import Img2 from '../images/clamaco.png'
import Img3 from '../images/mccann.png'

function Carrousel() {
  return (
    <div className="Container-Carousel">
      <div className="CarouselSection">
      <h2>VER MAS PROYECTOS</h2>
        <Carousel>
            <Carousel.Item>
            <img
              className="d-blockw-100"
              src={Img}
              alt="First slide"
            />

            </Carousel.Item>
          <Carousel.Item className="itemcarru">
            <img
              className="d-blockw-100"
              src={Img2}
              alt="Third slide"
            />


            </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-blockw-100"
              src={Img3}
              alt="Third slide"
            />

            </Carousel.Item>
        </Carousel>
</div>
    </div>
  );
}

export default Carrousel;