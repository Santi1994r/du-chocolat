import budinNaranja from '../../../assets/images/Queques-de-naranja.svg'
import panDulce from '../../../assets/images/pan-dulce.svg'
import tortaNegra from '../../../assets/images/torta-selva-negra-frutillas.svg'
import Button from 'react-bootstrap/Button';

import './welcome.css'

export default function Welcome () {
    return(
        <section>
            <div className="container modoPc">
                <div className="row row-cols-1 row-cols-md-2">

                    <div className="col-6-md d-flex justify-content-end">
                        <img src={budinNaranja} className="widthBudinNar" alt="du chocolat" />
                    </div>

                    <div className="col-6-md">
                        <div className="row row-cols-1 row-cols-md-2 mt-3">
                            <div className="col">
                                <img src={panDulce} className="widthPanDulce" alt="du chocolat" />
                            </div>
                            <div className="col">
                                <img src={tortaNegra} className="TorSelvaNegra"
                                alt="du chocolat" />
                            </div>
                        </div>
                        <div className="row containerWelcome">
                            <h1 className='titPrinc'>¡Bienvenidoss!</h1>
                            <p className='parrPrinc'>Nos esforzamos día a día para ofrecerte los mejores postres
                            orgánicos y 100% artesanales</p>
                            <a className="btnPedido" href="https://wa.me/51991672404?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank">¡Quiero hacer un pedido!</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}