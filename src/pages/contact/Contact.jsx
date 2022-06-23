import "./Contact.css";
import React from "react";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Contact = () => {
  return <>
    <Header/>
    <Form/>
    <div className="containerEmail">
      <h2>E-mail</h2>
      <p>info@cgiconsulting.co</p>
      <p>ingenieria@cgiconsulting.co</p>
      <p>seguros@cgiconsulting.co</p>
      <p>energia@cgiconsulting.co</p>
      <p>inmuebles@cgiconsulting.co</p>
    </div>
    <Footer/>
  </>;
};

export default Contact;
