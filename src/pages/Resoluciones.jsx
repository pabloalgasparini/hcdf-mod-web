import React from "react";
import "./ordenanzas.css";
import { BuscarResolucion } from "../Components/BuscarResoluciones";

function Resoluciones() {
  return (
    <div className="container_ordenanzas">
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title ordenanza">
            <h2>Resoluciones</h2>
            <p>En esta sección usted podrá buscar y descargar resoluciones.</p>
          </div>
          <BuscarResolucion />
        </div>
      </section>
    </div>
  );
}

export default Resoluciones;
