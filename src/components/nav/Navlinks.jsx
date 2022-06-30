import { Link, useLocation } from "react-router-dom";

const Navlinks = (props) => {
  const location = useLocation();
  const urlActual = location.pathname;
  console.log(urlActual);
  return (
    <>
      <ul>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/inicio"
            className={`${
              (urlActual === "/inicio" || urlActual === "/") && "selected"
            } nav-link`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/nosotros"
            className={`${urlActual === "/nosotros" && "selected"} nav-link`}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/soluciones"
            className={`${urlActual === "/soluciones" && "selected"} nav-link`}
          >
            Soluciones
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/servicios"
            className={`${urlActual === "/servicios" && "selected"} nav-link`}
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/proyectos"
            className={`${urlActual === "/proyectos" && "selected"} nav-link`}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              props.isMobile && props.closeMobile();
            }}
            to="/contacto"
            className={`${urlActual === "/contacto" && "selected"} nav-link`}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navlinks;
