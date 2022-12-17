import "./footerMobile.css";
import logoWhatsApp from "../../assets/images/Whatsapp.svg";
import logoFooter from '../../assets/images/Logofooter.svg';
import instagram from "../../assets/images/instagram.svg";
import mail from '../../assets/images/mail.svg';
import vectores from '../../assets/images/fondoCel.png';



export default function FooterMobile() {
  return (
    <footer className="footerMobile container-fluid">
      <div className="row">
        <h6 className="contacFooterM">¡Contáctanos!</h6>
        <p className="mt-2 text-white fs-5 text-center">De Lunes a Sábado</p>
        <p className="text-white fs-5 text-center">Horario: 09:00 - 21:00</p>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <img src={logoWhatsApp} alt="" />
        <div>
          <p className="mx-4 whatsAppParraf text-white">WhatsApp:</p>
          <p className="mx-4 whatsAppParraf text-white">991672404</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <img src={instagram} alt="" />
        <div>
          <p className="mx-4 text-white insta">@duchocolat_peru</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <img className="logoMail" src={mail} alt="du chocolat" />
        <div>
          <p className="text-white mailLargo">du.chocolat.pedidos@gmail.com</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center containerLogoFooter">
        <img src={logoFooter} className="logoFooterMobile" alt="" />
        <img src={vectores} className="vectores" alt="" />
      </div>
    </footer>
  );
}
