import "./queHacemos.css";
import llavePrinc from "../../../assets/images/llave.png";
import CarrouselSec3 from "./CarrouselSec3";
import InfoCarrousel from "./InfoCarrousel";
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
/* ------- carta ------ */
import carta from "../../../assets/images/seccion3/fotoCartaSec3.svg";
/* ------------------------------------- */

export default function QueHacemos() {
  return (
    <>
      <section id="seccion-3"></section>
      <section className="container ContainerLoQueHacemos">
        <h4 className="titSec3">Lo que hacemos</h4>
        <div className="llaveContainer">
          <img className="llaveSec3" src={llavePrinc} alt="" />
        </div>
        <div className="row containerCards">
          <div className="col columnaCards">
            <figure className="containerCard">
              <CarrouselSec3
                img1={tabletas}
                img2={chocolateria}
                img3={chocoBarra}
                ref1="Tabletas"
                ref2="Trufas"
                ref3="Bombones"
              />
              <InfoCarrousel
                tit="Chocolates"
                parr="Disfrutá de nuestra gran variedad de bombones, trufas, habanos y
        tabletas de chocolate, a base de cacao orgánico, con exquisitos frutos
        secos, deshidratados y rellenos caseros."
              />
            </figure>
          </div>
          <div className="col columnaCards">
            <figure className="containerCard">
              <CarrouselSec3
                img1={chocoManjar}
                img2={quequeFrutado}
                img3={redvelvet}
                ref1="Choco Manjar"
                ref2="Queque Frutado"
                ref3="Red Velvet"
              />
              <InfoCarrousel
                tit="Pasteles"
                parr="Crea dulces momentos con nuestras tortas, queques caseros, pyes y chessecakes, elaborados con una fina selección de ingredientes y cremas que potencian cada sabor para un máximo disfrute."
              />
            </figure>
          </div>
        </div>
        <div className="row containerCards">
          <div className="col columnaCards">
            <figure className="containerCard">
              <CarrouselSec3
                img1={alfajores}
                img2={brownies}
                img3={cupcakes}
                ref1="Alfajores"
                ref2="Brownies"
                ref3="Cupcakes"
              />
              <InfoCarrousel
                tit="Bocaditos"
                parr="El complemento ideal para todo momento especial. 
Deléitate con nuestros alfajores, cupcakes y bocaditos salados pensados especialmente para ti."
              />
            </figure>
          </div>
          <div className="col columnaCards">
            <figure className="containerCard">
              <CarrouselSec3
                img1={giftBox1}
                img2={giftBox2}
                img3={giftBox3}
                ref1="Gift Box"
                ref2="Gift Box"
                ref3="Gift Box"
              />
              <InfoCarrousel
                tit="Gift Box"
                parr="Sorprende con estas bellas cajas de regalo, únicas y especiales, con diversos productos dulces, frutos y accesorios que harán de tu regalo una experiencia inolvidable."
              />
            </figure>
          </div>
        </div>
        <div className="row containerCarta">
          <div className="col p-0">
            <img className="budinCarta" src={carta} alt="" />
          </div>
          <div className="col containerBtnCarta">
            <h5 className="titCarta">Carta</h5>
            <p className="textoCarta">
              Haz click acá abajo para ver el listado completo de todos nuestros
              productos y sus precios
            </p>
            <a
              className="btnCarta"
              target="_blank"
              href="https://linktr.ee/duchocolat_peru"
              role="button"
            >
              Ver Carta
            </a>
          </div>
        </div>
        <div className="containerProp">
          <h5 className="propuesta">
            También contamos con propuestas corporativas ¡Consultanos!
          </h5>
        </div>
      </section>
    </>
  );
}
