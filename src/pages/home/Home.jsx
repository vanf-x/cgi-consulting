import "./Home.css";
import { Link, useLocation, NavLink } from "react-router-dom";
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <div className="hero">
        <img src="../src/img/hero.jpg" alt="hero-img" />
        <div className="hero_text">
          <h2>
            En CGI CONSULTING INC. usted encuentra una organización que ofrece
            lo mejor de sí, con una estructura de servicios a la medida de sus
            exigencias y necesidades.
          </h2>
          <Link to="/nosotros" className="btn-hero">
            Ver más
          </Link>
        </div>
      </div>

      <div className="middle">
        <div className="middle_img">
          <img src="../src/img/circle.png" alt="circle-img" />
        </div>
        <div className="middle_text">
          <h3>Consultoría y Gestión para la Inversión en Infraestructura</h3>
          <p>
            Brindamos la consultoría en gestión de inversiones para
            infraestructura donde involucramos servicios de Ingeniería y
            Construcción, Energía y Automatización, Bienes Raíces Industriales y
            Gestión de Riesgos y Seguros.
          </p>
        </div>
      </div>
      
      <div className="services">
        <div className="services_title">
          <h3>Servicios</h3>
        </div>
        <div className="services_list">
          <div className="services_list-serv">
            <h4>Energía y Automatización</h4>
          </div>
          <div className="services_list-serv">
            <h4>Suministro y Automatización</h4>
          </div>
          <div className="services_list-serv">
            <h4>Ingeniería y Construcción</h4>
          </div>
          <div className="services_list-serv">
            <h4>Bienes Raíces Industriales</h4>
          </div>
          <div className="services_list-serv">
            <h4>Gestión de Riesgos y Seguros</h4>
          </div>
        </div>
      </div>
      <div className="clients">
        <h3>Empresas que confían en nosotros</h3>
        <div className="clients_images">
          <img src="../src/img/Clientes/AndradeGutierrez.png" alt="andrade" />
          <img src="../src/img/Clientes/CAFAE.jpg" alt="cafae" />
          <img src="../src/img/Clientes/CASA.png" alt="casa" />
          <img src="../src/img/Clientes/Concyssa.jpg" alt="concyssa" />
          <img src="../src/img/Clientes/RD.png" alt="rd" />
          <img src="../src/img/Clientes/Grupo Binda.jpg" alt="binda" />
          <img src="../src/img/Clientes/Grupo Binomio.png" alt="binomio" />
          <img src="../src/img/Clientes/iccgsa-logo.png" alt="iccgsa" />
          <img src="../src/img/Clientes/Mota-Engil.jpg" alt="mota" />
          <img src="../src/img/Clientes/Club Rinconada.jpg" alt="rinconada" />
          <img src="../src/img/Clientes/La Pradera.png" alt="pradera" />
          <img src="../src/img/Clientes/Unispan.jpg" alt="unispan" />
          <img src="../src/img/Clientes/logo-incot.jpg" alt="incot" />
          <img src="../src/img/Clientes/JE Construcciones Grles.jpg" alt="je" />
          <img src="../src/img/Clientes/logo-azzurra-cab.jpg" alt="azzurra" />
          <img src="../src/img/Clientes/JJC.png" alt="jjc" />
          <img src="../src/img/Clientes/EyF.jpg" alt="EyF" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
