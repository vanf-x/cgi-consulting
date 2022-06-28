import "./Services.css";

import React from "react";
import Header from "../../components/header/Header";
import { Container } from "@mui/material";
import Footer from "../../components/footer/Footer";

const Services = () => {
  return <>
      <Header titulo="SERVICIOS"/>
      {/* imagen  */}
      <Container>
        <section>
          <h1>Ingeniería y Construcción</h1>
          <p style={{margin:'2%'}}>Integramos proyectos involucrando planificación, aprovisionamiento y ejecución, con la asistencia permanente a lo largo todos los procesos: </p>
          <ul style={{margin:'2%'}}>
            <li>
              <h4>Dimensionamiento: </h4>
              <p>Diseño y elaboración del requerimiento o expediente técnico a fin de determinar la estructura de costos del proyecto en relación directa con los recursos, capacidades y estándares o niveles de servicio requeridos para su ejecución. </p>
            </li>
            <li>
              <h4>Administración de contratos: </h4>
              <p>Planificación, consolidación, validación y control de las adquisiciones referidas al proyecto con contratistas, subcontratistas, Para tal propósito, nos encargamos de elaborar los contratos y realizar el proceso de negociación, evaluación y desarrollo de proveedores. </p>
            </li>
            <li>
              <h4>Gestión de la ejecución: </h4>
              <p>Control para el correcto funcionamiento y ejecución del proyecto, garantizando el cumplimiento en costos, nivel de servicio y plazos establecidos. Se internalizan funciones de análisis de consumo, niveles de reposición y almacenaje entre otros. </p>
            </li>
          </ul>
          <p>Nos especializamos en el desarrollo de proyectos de movimiento de tierras y habilitación urbana tales como: </p>
          <ul style={{margin:'2%'}}>
            <li>Demoliciones parciales y totales</li>
            <li>Voladuras con material explosivo a cielo abierto en roca </li>
            <li>Excavaciones masivas para edificaciones con transporte y eliminación de desmonte</li>
            <li>Preparación, corte y perfilado del terreno - trabajos topográficos, trazo, replanteo, nivelación y compactación de subrasante, y conformación de base de afirmado </li>
            <li>Trazado de vías en predios urbanizables </li>
            <li>Pavimentación, asfaltado, y tendidos eléctricos, de agua y desagüe </li>
            <li>Conformación de base y subbase de pistas y veredas </li>
            <li>Ensanchamiento de plataforma para carreteras </li>
            <li>Encauzamiento y limpieza con zarandeo de materiales </li>
            <li>Edificación, remodelación, ampliación, redistribución de espacios y estructuras internas </li>
            <li>Alquiler de maquinaria pesada y equipos livianos con sus implementos. </li>
          </ul>
        </section>
        <br/>
        <section>
          <h1>Energía y Automatización</h1>
          <p style={{marginTop:'2%'}}>Solución de eficiencia energética y automatización como servicio, lo cúal no implica CAPEX ya que se sustenta con la reducción del 50% mínimo garantizado de potencia pudiéndose pagar con el ahorro mensual entre 1 a 3 años y con una vida útil de 10-11 años.</p>
          <p style={{marginTop:'2%'}}>La oferta de valor consiste en reposición de luminarias en caso de defecto, deterioro y desgaste prematuro como segunda capa de garantía sobre las marcas, mediciones períodicas de potencia y luminosidad, certificación por reducción de CO2, kits de emergencia, sensores de movimiento y software de gestión, tanto para infraestructuras existentes como nuevas.</p>
          <p style={{marginTop:'2%'}}>Trabajamos con el top 10 fabricantes mundiales como son Luxtronic, HP Winner, y AGC, además de marcas comerciales como GE, Cree, Phillips, Osram y Zumtobel. Tenemos 11 clientes y más de 120 proyectosa lo largo de los últimos 6 años en infraestructuras de Educación, Hospitalidad, Salud, Call Center, Retail, Industrial, Oficinas, Alumbrado Público, Recreacional, Deportivo y de Alta Competencia.</p>
        </section>
        <br/>
        <section>
          <h1>Suministro y Automatización</h1>
          <p style={{margin:'2%'}}>En el campo energético gestionamos la ejecución, suministro y montaje de:</p>
          <ul style={{margin:'2%'}}>
            <li>Proyectos EPC y llave en mano</li>
            <li>UPS modulares- monoblock y transformadores de aislamiento</li>
            <li>Baterías tradicionales y ecológicas, banco de condensadores, rectificadores, estabilizadores, aire de precisión, variadores de velocidad y filtros de armónicos.</li>
            <li>Transformadores secos hasta 3mva 33kw y húmedos hasta 100 mva y 138 kw</li>
            <li>Tableros de distribución, de transferencia manual o automática y de arranque con variadores de carga</li>
            <li>Subestaciones eléctricas en MT y BT</li>
            <li>Celdas de media tensión 10kV y 22.9 kV</li>
            <li>Cableado y conexionado de cables de fuerza y control, y líneas de transmisión en BT y MT</li>
            <li>Bandejas porta- cables, tuberías y accesorios</li>
            <li>Construcción y medición de sistemas de puesta a tierra y de protección atmosférica</li>
            <li>Grupos electrógenos diésel y gas natural desde 5kw hasta 3.000kw, torres de iluminación y cableado estructurado y eléctrico.</li>
          </ul>
          <p>Algunas de las marcas con las que trabajamos son INVT, Sinexcel, Jefferson Electric, Salicru y Chloride.</p>
          {/* imagen */}
        </section>
        <br/>
        <section>
          <h1>Bienes Raíces Industriales</h1>
          <p style={{margin:'2%'}}>Nos encargamos de vincular toda la oferta y demanda de bienes inmuebles en las diferentes condiciones de negociación y uso que se presenten y de acuerdo con las estipuladas por sus propietarios y compradores.</p>
          <p style={{margin:'2%'}}>Nos especializamos en terrenos industriales, locales comerciales, oficinas corporativas y almacenes industriales tanto en Perú como en el extranjero, incluyendo los siguientes alcances:</p>
          <ul style={{margin:'2%'}}>
            <li>Inspección y tasación </li>
            <li>Inventario</li>
            <li>Promoción </li>
            <li>Gestión Legal </li>
            <li>Administración de inmuebles </li>
          </ul>
        </section>
        <br/>
        <section>
          <h1>Gestión de Riesgos y Seguros</h1>
          <p style={{margin:'2%'}}>Asesoramos en la Gestión de Riesgos y Administración de Seguros, donde trabajamos con todas las Cías. de Seguros en Perú- Protecta, Qualitas, La Positiva, Mapfre, Pacífico, y Rímac - y más de un bróker especializado por industria y ramo, reevaluando nuevas o condiciones actuales y generando ahorro y eficiencia para la empresa.</p>
          <p style={{margin:'2%'}}>Nos enfocamos principalmente en Seguros Todo Riesgo para Contratista y/o Maquinaria, principalmente TREC, CAR, 3D, RCE, Transporte, Vehicular y Lucro Cesante, integrando la Prevención de Riesgos e intermediando en caso de siniestro a través del bróker con la aseguradora.</p>
          {/* imagen */}
        </section>
      </Container>
      <Footer/>
  </>;
};

export default Services;
