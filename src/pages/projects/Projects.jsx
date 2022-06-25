import "./Projects.css"
import React from 'react'
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import { Container } from "@mui/system";


const Projects = () => {
  return (
    <>
      <Header/>
      <Container>
        <div>
          <h1>Unispan S.A</h1>
          <h3>Proyecto:  Asfaltado Planta Lurin, Lima</h3>
          <p>Preparación, corte y perfilado del terreno, trabajos topográficos, trazo, replanteo, nivelación y compactación de subrasante, conformación de base y subbase de afirmado, y pavimentación, incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
          {/* imagenes */}
        </div>
        <div>
          <h1>Gastronomía Nanka Peru S.A.C.</h1>
          <h3>Proyecto: Demolición de dos viviendas contiguas para nuevo local San Isidro</h3>
          <p>Demolición total, transporte y eliminación de desmonte, remodelación, ampliación, redistribución de espacios y estructuras internas incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
          {/* imagenes */}
        </div>
      </Container>
      <Footer/>
    </>
  )
}

export default Projects

