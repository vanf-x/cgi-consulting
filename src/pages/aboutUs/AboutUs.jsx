import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-header">
        <h1>Nosotros</h1>
      </div>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <img src="../../src/img/Logo-removebg-previewEdited.png" alt="logo" />
          </div>
          <div className="content-right">
            <p>
              CGI CONSULTING INC. se establece en el mercado peruano hace más de
              15 años con el objetivo primordial de lograr un mayor nivel de
              eficiencia, especialización y diferenciación para el desarrollo
              del core de negocio de nuestros clientes en relación directa con
              el crecimiento y demanda actual de industrias como Construcción,
              Energía, Tecnología y Telecomunicaciones.
            </p>
            <p>
              Brindamos la consultoría en gestión de inversiones para
              infraestructura donde involucramos servicios de Ingeniería y
              Construcción, Energía y Automatización, Bienes Raíces Industriales
              y Gestión de Riesgos y Seguros.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <h2>Misión</h2>
          </div>
          <div className="content-right">
            <p>
              Proveer de soluciones integrales a la medida mediante una
              estrategia de diferenciación on base en la eficiencia de nuestros
              procesos, transladándola a nuestros clientes para lograr
              incrementar su rentabilidad y minimizar riesgos operativos y
              costos asociados.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <h2>Visión y Valores</h2>
          </div>
          <div className="content-right">
            <p>
              Ser el socio estratégico de plena excelencia y confianza para
              todos nuestros clientes, con una oferta diferenciada y nivel de
              servicio superior. Para ello, nos basamos en valores tales como:
            </p>
            <ul>
              <li>Transparencia</li>
              <li>Confianza</li>
              <li>Confidencialidad</li>
              <li>Compromiso</li>
              <li>Oportunidad</li>
              <li>Dinamismo</li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <h2>Propuesta de valor</h2>
          </div>
          <div className="content-right">
            <p>
              CGI CONSULTING INC. aporta servicios y soluciones que ayudan a la
              continuidad del negocio de nuestros clientes mediante las
              siguientes estrategias:
            </p>
            <ul>
              <li>
                Alto grado de integración vertical que nos permite ser socios
                estratégicos logrando una gestión centralizada, disminuyendo
                costos y problemas de responsabilidad al dehacerse de procesos a
                través de la sinergia de recursos mutuos.
              </li>
              <li>
                Amplitud de oferta y know how nos permite estar presente en
                proyectos de diversa envergadura y brindar soluciones integrales
                a medida.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
