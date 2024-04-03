import React from "react";

function Bloque5DeMarzo() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Bloque 5  de Marzo</h2>
            <p>
            Concejal electo perteneciente al bloque 5 de Marzo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto10.jpg"
                    className="img-fluid"
                    alt
                  />
                  {/* <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div> */}
                </div>
                <div className="member-info">
                  <h4>Juan Marcelo Ocampo</h4>
                  <span>Concejal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bloque5DeMarzo;
