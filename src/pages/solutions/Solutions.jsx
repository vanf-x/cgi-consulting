import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Solutions.css";

const Solutions = () => {
  return (
    <>
      <Header titulo="SOLUCIONES"/>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <h2>Planificación e integración</h2>
          </div>
          <div className="content-right">
            <p>
              Busca lograr un desarrolo dinámico en la provición de servicios,
              elevando la calidad y reduciendo costos de propiedad para así
              atraer más valor a sus inversiones. Los clientes pueden
              concentrarse en las actividades del core de negocio para obtener
              rápido retorno de la inversión.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="content-left">
            <h2>Servicios Administrados</h2>
          </div>
          <div className="content-right">
            <p>
              Cubre una gama de servicios externos de gestión para proporcionar
              un soporte confiable conforme a las necesidades del cliente, que
              ayuden a optimizar la operación y el mantenimiento, reducir costos
              e incrementar la rentabilidad.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="content-left">
            <h2>Servicios In-House</h2>
          </div>
          <div className="content-right">
            <p>
              Proporciona servicios en campo, mejorando altamente la
              disponibilidad de los recursos y reduciendo riesgos de
              implementación. Con nuestras herramientas integradas, expertise
              técnico y gestión, aseguramos un despliegue y ejecución altamente
              eficiente.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Solutions;
