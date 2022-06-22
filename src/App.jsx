<<<<<<< HEAD
import './App.css'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
function App() {
=======
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Solutions from "./components/solutions/Solutions";
import Services from "./components/services/Services";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
>>>>>>> alt1

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
