import "./Nav.css";
import { Link, useLocation, NavLink } from "react-router-dom";
// import Solutions from "../solutions/Solutions";
// import Services from "../services/Services";
// import Clients from "../clients/Clients";
// import Contact from "../contact/Contact";
import logo from "../../img/Logo-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  console.log(urlActual);
  return (
    <div>
      <header className="nav-header">
        <div>
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
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="nav-icon"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="nav-icon"
          ></FontAwesomeIcon>
          Lima, Perú
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="nav-icon"
          ></FontAwesomeIcon>
          info@cgiconsulting.com
        </div>
      </header>
      <footer className="nav-footer">
        <div>
          <Link to="/inicio">
            <img src={logo} alt="cgi-logo" className="nav-logo" />
          </Link>
        </div>
        <div className="nav_links">
          <Link
            to="/inicio"
            className={`${(urlActual === "/inicio" || urlActual === "/")  && "selected"} nav-link`}
          >
            Inicio
          </Link>
          <Link to="/nosotros" className={`${urlActual === "/nosotros" && "selected"} nav-link`}>
            Nosotros
          </Link>
          <Link to="/soluciones" className={`${urlActual === "/soluciones" && "selected"} nav-link`}>
            Soluciones
          </Link>
          <Link to="/servicios" className={`${urlActual === "/servicios" && "selected"} nav-link`}>
            Servicios
          </Link>
          <Link to="/proyectos" className={`${urlActual === "/proyectos" && "selected"} nav-link`}>
            Proyectos
          </Link>
          <Link to="/contacto" className={`${urlActual === "/contacto" && "selected"} nav-link`}>
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Nav;
