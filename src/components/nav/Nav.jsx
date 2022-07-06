import "./Nav.css";
import logo from "../../img/Logo-removebg-previewEdited.png";
import { Link } from "react-router-dom";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div>
      <header className="nav-header">
        <div className="nav-header_media">
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

        <div className="nav-header_contact">
          <div className="contact_location">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="nav-icon"
            ></FontAwesomeIcon>
            <p>Lima, Perú</p>
          </div>
          <div className="contact_mail">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-icon"
            ></FontAwesomeIcon>
            <p>info@cgiconsulting.co</p>
          </div>

        </div>
      </header>
      <footer className="nav-footer">
        <div className="nav-footer_logo">
          <Link to="/inicio">
            <img src={logo} alt="cgi-logo" className="nav-logo" />
          </Link>
        </div>
        <div className="nav-footer_links">
          <MobileNav />
          <Navigation />
        </div>
      </footer>
    </div>
  );
};

export default Nav;
