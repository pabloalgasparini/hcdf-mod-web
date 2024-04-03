import React from "react";

function BloqueUcr() {
  return (
    <div>
      <div>
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title edificio">
              <h2>Bloque UCR</h2>
              <p>
              Concejales electos pertenecientes al bloque de la Unión Civica Radical.
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
                      src="/assets/img/consejales/foto9.jpg"
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
                    <h4>Enzo Mariano Roig Casadei</h4>
                    <span>Concejal</span>
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
                      src="/assets/img/consejales/foto11.jpg"
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
                    <h4>Diego Fernando Herrera</h4>
                    <span>Concejal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BloqueUcr;
