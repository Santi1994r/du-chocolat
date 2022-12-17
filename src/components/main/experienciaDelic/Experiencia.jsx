import './experiencia.css'
import flecha from '../../../assets/images/Flecha.svg'
import torta from '../../../assets/images/torta-seccion4.svg'
import celu from '../../../assets/images/cel-seccion4.svg'
import moto from '../../../assets/images/moto-seccion4.svg'
import corcheteSup from '../../../assets/images/corcheteSupSecc4.svg'
import corcheteInf from '../../../assets/images/corcheteInfSecc4.svg'


export default function Experiencia() {
  return (
    <section id='seccion-4' className="sec-4">
            <h5 className="text-center titSecc4">Una experiencia deliciosa empieza aquí:</h5>
            <div className="container-fluid containerSeccion4">
                <div className="row row-cols-1 row-cols-md-4 g-2">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <p className="fontJost textoEnFlecha">¿Cómo comprar?</p>
                        <img src={flecha} className="flecha" alt="" />
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <img src={torta} className="imgSecc4" alt="" />
                        <h6 className="fontDancing mt-3">Selecciona</h6>
                        <p className="fontJost">Elige de la carta tu postre favorito</p>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <img src={celu} className="imgSecc4" alt="" />
                        <h6 className="fontDancing mt-3">Pide</h6>
                        <p className="fontJost">Haz tu encargo por Whatsapp</p>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <img src={moto} className="imgSecc4" alt="" />
                        <h6 className="fontDancing mt-3">Recibe</h6>
                        <p className="fontJost">¡Recibe en tu domicilio y disfruta!</p>
                    </div>
                </div>
            </div>
            <div className="container redesContainer">
                <div className="row redes">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <img src={corcheteSup} className="my-4 corchete" alt="" />
                        <h6 className="my-4 shadowText textSec-4">Pedir por Whatsapp</h6>
                        <a className="btnWhatsApp text-white w-50 my-4" target="_blank" href="https://wa.me/51991672404?text=Hola%20quiero%20hacer%20un%20pedido" role="button">
                            Whatsapp
                        </a>
                        <img src={corcheteInf} className="my-4 corchete" alt="" />
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <img src={corcheteSup} className="my-4 corchete" alt="" />
                        <h6 className="my-4 shadowText textSec-4">¡Síguenos en redes!</h6>
                        <div className="d-flex justify-content-center g-4 my-4">
                            <a className="btnSecc4 mx-2" target="_blank" href="https://www.instagram.com/duchocolat_peru/" role="button">
                                Instagram
                            </a>
                            <a className="btnSecc4 mx-2" target="_blank" href="https://www.facebook.com/duchocolat51" role="button">
                                Facebook
                            </a>
                        </div>
                        <img src={corcheteInf} className="my-4 corchete" alt="" />
                    </div>
                </div>
            </div>
        </section>
  )
}

