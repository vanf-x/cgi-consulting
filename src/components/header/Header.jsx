import "./Header.css";
import React from "react";
import imgFondoTitulo from "../../img/fondo-titulo.png";

const Header = (props) => {
    return <>
            <div className="containerTitulo">
                <img src={imgFondoTitulo} alt="fondo" className="imgFondoTitulo"/>
                <h1 className="tituloSeccion">{props.titulo}</h1>
            </div>
        </>;
};

export default Header;
