import "./Contact.css";

import React from "react";
import imgFondoTitulo from "../../img/fondo-titulo.png";
import Form from "../../form/Form";

const Contact = () => {
  return <>
    <div className="containerTitulo">
      <img src={imgFondoTitulo} alt="fondo" className="imgFondoTitulo"/>
      <h1 className="tituloSeccion">CONTACTO</h1>
    </div>
    <Form/>
    <div className="containerEmail">
      <h2>E-mail</h2>
      <p>info@cgiconsulting.co</p>
      <p>ingenieria@cgiconsulting.co</p>
      <p>seguros@cgiconsulting.co</p>
      <p>energia@cgiconsulting.co</p>
      <p>inmuebles@cgiconsulting.co</p>
    </div>
    {/* footer */}
  </>;
};

export default Contact;
