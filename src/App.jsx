/* HEAD */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import AboutUs from "./pages/aboutUs/AboutUs";
import Solutions from "./pages/solutions/Solutions";
import Services from "./pages/services/Services";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Nav from "./components/nav/Nav";

function App() {
  // INICIO NOSOTROS SOLUCIONES NAV
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/soluciones" element={<Solutions />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
