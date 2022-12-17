import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import budin from '../../../assets/images/Queques-de-naranja.svg'
import panDulce from '../../../assets/images/pan-dulce.svg'
import tortaNegra from '../../../assets/images/torta-selva-negra-frutillas.svg'

function CarrouselWelcome() {

  return (
    <section id='seccion-1' className='carrouselMobile'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={budin}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={panDulce}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tortaNegra}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="containerWelcome">
        <h1 className='titPrinc'>¡Bienvenido!</h1>
        <p className='parrPrinc'>Nos esforzamos día a día para ofrecerte los mejores postres
        orgánicos y 100% artesanales</p>
        <a className="btnPedido" href="https://wa.me/51991672404?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank">¡Quiero hacer un pedido!</a>
      </div>
    </section>
  );
}

export default CarrouselWelcome