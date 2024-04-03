import React from 'react';
import './ordenanzas.css'
import {BuscarOrdenanza} from "../Components/BuscarOrdenanza";



function Ordenanzas() {
  return (
    
    <div className='container_ordenanzas' >
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title ordenanza">
            <h2>Ordenanzas</h2>
            <p>
              En esta sección usted podrá buscar y descargar ordenanzas.
            </p>
          </div>
          <BuscarOrdenanza/>
        </div>
      </section>
      </div>
  )
}

export default Ordenanzas