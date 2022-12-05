import React from 'react'
import './nosotros.css'
import tortaBlanca from '../../../assets/images/tortaSec2.png'
import galletasSec2 from '../../../assets/images/galletasSec2.png'

export default function Nosotros() {
  return (
    <div>
        <section id="seccion-2"></section>
        <section className="container sec-2">
            <div className="d-flex justify-content-center sec-2-mobile">
                <div className="col d-flex flex-column align-items-center">
                    <h2 className="titSec2">NOSOTRAS</h2>
                    <p className="parrafSec-2">Somos un emprendimiento liderado principalmente por mujeres, que inició
                        hace más de
                        17 años, realizando productos a base de cacao y chocolate.
                    </p>
                    <p className="parrafSec-2">Actualmente buscamos generar la experiencia a través de nuestra gran
                        variedad de
                        productos de chocolatería y repostería.
                    </p>
                    <img src={tortaBlanca} className="mt-2 imgSec2-torta" alt="" />
                </div>
                <div className="col">
                    <img src={galletasSec2} className="imgSec2-galletas" alt="" />
                    <h2 className="titSec2Dancing">Postres 100% artesanales</h2>
                    <p className="parraf-galletas">Elaborados de forma artesanal sin saborizantes ni preservantes
                        artificiales, con ingredientes
                        selectos y orgánicos.
                    </p>
                    <p  className="parraf-galletas">Además tenemos un compromiso con el medio ambiente, por lo
                        que
                        nuestros procesos reducen al
                        mínimo el consumo de plásticos u otros elementos que no sean biodegradables, salvo que estos
                        sean indispensables para la conservación adecuada del producto.
                    </p>
                    <img src={galletasSec2} className="imgSec2Mobile" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
};