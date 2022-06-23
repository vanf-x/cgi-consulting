import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="children">
        <h1 style={{margin:'2%'}}>CGI CONSULTING INC.</h1>
        <img src="" alt="Logo CGI." />
        <p>Consultoría y Gestión para la Inversión en Infraestructura</p>
        {/* logos redes */}
      </div>
      <div className="children">
        <h2 style={{margin:'2%'}}>Contáctenos</h2>
        {/* logo email */}
        <p>info@cgiconsulting.co</p>
      </div>
      <div className="children">
        <h2 style={{margin:'2%'}}>Servicios</h2>
        <p>Ingeniería y Construcción</p>
        <p>Energía y Automatización</p>
        <p>Bienes Raíces Industriales</p>
        <p>Suministro y Automatización</p>
        <p>Gestión de Riesgos y Seguros</p>
      </div>
      <hr></hr>
      <div id="copyright">Copyright  2022.Todos los derechos reservados.</div>
    </div>
  )
}

export default Footer
