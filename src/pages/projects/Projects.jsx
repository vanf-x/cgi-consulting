import "./Projects.css"
import React from 'react'
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import {Container} from "@mui/material";


const Projects = () => {
  return (
    <>
      <Header titulo="PROYECTOS"/>
        <div className="containerProyectos">
          <section className="unispan">
            <h1 className="h1">Unispan S.A</h1>
            <h3 className="h3">Proyecto:  Asfaltado Planta Lurin, Lima</h3>
            <p className="p">Preparación, corte y perfilado del terreno, trabajos topográficos, trazo, replanteo, nivelación y compactación de subrasante, conformación de base y subbase de afirmado, y pavimentación, incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
            <img src="/canadagreen.jpg" alt=""  className="img"/>
          </section>
          <section className="nanka">
            <h1 className="h1">Gastronomía Nanka Peru S.A.C.</h1>
            <h3 className="h3">Proyecto: Demolición de dos viviendas contiguas para nuevo local San Isidro</h3>
            <p className="p">Demolición total, transporte y eliminación de desmonte, remodelación, ampliación, redistribución de espacios y estructuras internas incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
            <img src="" alt="" className="img"/>
          </section>
        </div>
      <Footer/>
    </>
  )
}

export default Projects

