import "./Header.css";
import React from "react";
import imgFondoTitulo from "../../img/fondo-titulo.png";

const Header = (props) => {
    return <>
            <div className="containerTitle">
                <img src={imgFondoTitulo} alt="fondo" className="imgBackgroundTitle"/>
                <h1 className="titleSeccion">{props.titulo}</h1>
            </div>
        </>;
};

export default Header;
