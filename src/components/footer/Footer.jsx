import './footer.css';
import logoFooter from '../../assets/images/Logofooter.svg';
import logoWhatsApp from '../../assets/images/Whatsapp.svg';
import instagram from '../../assets/images/instagram.svg';
import mail from '../../assets/images/mail.svg';



export default function Footer() {
  return (
    <footer className="container-fluid fondoFooter">
        <div className="d-flex flex-column prueba2 ">
            <div className="d-flex">
                <img src={logoFooter} className="logoFooter" alt="" />
                <div className="col d-flex flex-column justify-content-start align-items-start mx-5">
                    <h6 className="contacFooter my-3">¡Contáctanos!</h6>
                    <p className="mt-2 text-white fs-5">De Lunes a Sábado</p>
                    <p className="text-white fs-5">Horario: 09:00 - 21:00</p>
                </div>
                <div className="col">
                    <div className="d-flex mt-3">
                        <img src={logoWhatsApp} alt="" />
                        <div>
                            <p className="mx-4 whatsAppParraf text-white">WhatsApp:</p>
                            <p className="mx-4 whatsAppParraf text-white">991672404</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <img src={instagram} alt="" />
                        <div>
                            <p className="mx-4 text-white">@duchocolat_peru</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <img src={mail} alt="du chocolat" />
                        <div>
                            <p className="mx-4 text-white">du.chocolat.pedidos@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
