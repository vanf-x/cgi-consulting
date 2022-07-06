import "./Footer.css"
import React from 'react'
import logo from "../../img/Logo-removebg-previewEdited.png"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="cgi">
        <h1 style={{margin:'2%'}}>CGI CONSULTING INC.</h1>
        <img src={logo} alt="Logo CGI." className="logo" />
        <p>Consultoría y Gestión para la Inversión en Infraestructura</p>
      </div>

      <div className="contactenos">
        <h2 style={{margin:'2%'}}>Contáctenos</h2>
        <div className="email">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-icon"
            ></FontAwesomeIcon>
            <p>info@cgiconsulting.co</p>
        </div>
        <div className="iconsRedes">
          <a href="https://www.facebook.com/cgiconsultinginc" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="nav-icon"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/cgiconsulting/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="nav-icon"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/cgiconsulting/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="nav-icon"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <Link to="/servicios">
          <div className="servicios">
          <h2 style={{margin:'2%'}}>Servicios</h2>
          <p>Ingeniería y Construcción</p>
          <p>Energía y Automatización</p>
          <p>Bienes Raíces Industriales</p>
          <p>Suministro y Automatización</p>
          <p>Gestión de Riesgos y Seguros</p>
        </div>
      </Link>

      <div className="linea"></div>
      
      <div className="copyright">Copyright  2022.Todos los derechos reservados.</div>
    </div>
  )
}

export default Footer
