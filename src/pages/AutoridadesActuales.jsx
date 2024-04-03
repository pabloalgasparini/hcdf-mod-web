import React from "react";
import "./AutoridadesActuales.css";


function AutoridadesActuales() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Autoridades Actuales</h2>
            <p>
              Autoridades vigentes.
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/institucional/autoridades_actuales/foto1.jpg"
                    className="img-fluid"
                    alt
                  />
            
                </div>
                <div className="member-info">
                  <h4>Ruben Dario Di Martino</h4>
                  <span>Presidente</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/institucional/autoridades_actuales/foto2.jpeg"
                    className="img-fluid"
                    alt
                  />
               
                </div>
                <div className="member-info">
                  <h4>Jose Recalde</h4>
                  <span>Prosecretario Legislativo</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/institucional/autoridades_actuales/foto2.jpeg"
                    className="img-fluid"
                    alt
                  />
           
                </div>
                <div className="member-info">
                  <h4>Jose Recalde</h4>
                  <span>Prosecretario Legislativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AutoridadesActuales;
