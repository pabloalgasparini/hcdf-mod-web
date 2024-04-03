import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Ordenanzas from "./pages/Ordenanzas";
import Navbar from "./Components/Navbar";
import Contacto from "./pages/Contacto";
import Acerca from "./pages/Acerca";
import ScrollToTop from "./Components/ScrollToTop";
import AutoridadesAnteriores from "./pages/AutoridadesAnteriores";
import Edificio from "./pages/Edificio";
import Consejales from "./pages/Consejales";
import AutoridadesActuales from "./pages/AutoridadesActuales";
import BloqueUcr from "./pages/BloqueUcr";
import BloquePj from "./pages/BloquePj";
import BloqueNuevoPais from "./pages/BloqueNuevoPais";
import Bloque5DeMarzo from "./pages/Bloque5DeMarzo";
import BloquePro from "./pages/BloquePro";
import SesionesOrdinarias from "./pages/SesionesOrdinarias";
import Resoluciones from "./pages/Resoluciones";



function AppRouter() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route
          path="/institucional/autoridadesActuales"
          element={<AutoridadesActuales />}
        />
        <Route
          path="/institucional/autoridadesAnteriores"
          element={<AutoridadesAnteriores />}
        />
        <Route path="/institucional/edificio" element={<Edificio />} />
        <Route path="/consejales/concejales" element={<Consejales />} />
        <Route
          path="/consejales/bloqueDeConcejales/pj"
          element={<BloquePj />}
        />
         <Route
          path="/consejales/bloqueDeConcejales/ucr"
          element={<BloqueUcr />}
        />
        <Route
          path="/consejales/bloqueDeConcejales/nuevoPais"
          element={<BloqueNuevoPais />}
        />
            <Route
          path="/consejales/bloqueDeConcejales/5DeMarzo"
          element={<Bloque5DeMarzo />}
        />
             <Route
          path="/consejales/bloqueDeConcejales/pro"
          element={<BloquePro />}
        />
        <Route path="/ordenanzas/ordenanzas" element={<Ordenanzas />} />
        <Route path="/ordenanzas/resoluciones" element={<Resoluciones/>} />
        <Route path="/legislativo/sesionesOrdinarias" element={<SesionesOrdinarias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRouter;
