import React from "react";
import Carousel from 'react-bootstrap/Carousel';
/* -------imagenes de Carrousel 1 ------ */
import tabletas from "../../../assets/images/carousel1/Tabletas.jpeg";
import chocolateria from "../../../assets/images/carousel1/chocolateria.jpeg";
import chocoBarra from "../../../assets/images/carousel1/chocoBarra.jpeg";
/* -------fin de imagenes de carrousel------ */
/* -------imagenes de Carrousel 2 ------ */
import chocoManjar from "../../../assets/images/carousel2/chocoManjar.jpeg";
import quequeFrutado from "../../../assets/images/carousel2/Quequefrutado.jpeg";
import redvelvet from "../../../assets/images/carousel2/Redvelvet.jpeg";
/* ------------------------------------- */
/* -------imagenes de Carrousel 3 ------ */
import alfajores from "../../../assets/images/carousel3/Alfajores.jpeg";
import brownies from "../../../assets/images/carousel3/Brownies.jpeg";
import cupcakes from "../../../assets/images/carousel3/cupcakes.jpeg";
/* ------------------------------------- */
/* -------imagenes de Carrousel 4 ------ */
import giftBox1 from "../../../assets/images/carousel4/giftBox.jpeg";
import giftBox3 from "../../../assets/images/carousel4/giftBox3.jpeg";
import giftBox2 from "../../../assets/images/carousel4/giftBox2.jpeg";
/* ------------------------------------- */

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
