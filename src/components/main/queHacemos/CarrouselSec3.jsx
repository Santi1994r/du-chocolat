import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarrouselSec3(props) {

  return (
    <div>
      <Carousel className="carrouselContainer">
        <Carousel.Item>
          <img
            className="imgCarrousel"
            src={props.img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.ref1}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarrousel"
            src={props.img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{props.ref2}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarrousel"
            src={props.img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{props.ref3}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselSec3;
