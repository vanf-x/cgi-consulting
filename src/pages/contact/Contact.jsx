import "./Contact.css";
import React from "react";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Contact = () => {
  return <>
    <Header titulo="CONTACTO"/>
    <Form/>
    <div className="containerEmail">
      <h2>E-mail</h2>
      <p>info@cgiconsulting.co</p>
      <h4 style={{marginTop:'1%'}}>Para comunicarte con un área específica:</h4>
      <p>ingenieria@cgiconsulting.co</p>
      <p>seguros@cgiconsulting.co</p>
      <p>energia@cgiconsulting.co</p>
      <p>inmuebles@cgiconsulting.co</p>
    </div>
    <Footer/>
  </>;
};

export default Contact;
