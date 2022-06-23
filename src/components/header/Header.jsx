import "./Header.css";
import React from "react";
import imgFondoTitulo from "../../img/fondo-titulo.png";

const Header = () => {
    return <>
            <div className="containerTitulo">
                <img src={imgFondoTitulo} alt="fondo" className="imgFondoTitulo"/>
                <h1 className="tituloSeccion">XXX</h1>
            </div>
        </>;
};

export default Header;
