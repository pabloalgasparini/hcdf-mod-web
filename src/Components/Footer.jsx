import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  const backtotopRef = useRef(null); // Crea una referencia al botón

  useEffect(() => {
    const backtotop = backtotopRef.current; // Obtén la referencia del botón

    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };

    window.addEventListener("load", toggleBacktotop);
    document.addEventListener("scroll", toggleBacktotop); // Corrección: usa 'scroll' en document

    // Limpieza del efecto:
    return () => {
      window.removeEventListener("load", toggleBacktotop);
      document.removeEventListener("scroll", toggleBacktotop);
    };
  }, []); // Ejecuta el efecto solo una vez al renderizar

  return (
    <>
      <div>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-contact ">
                  <div class="footer-container">
                    <a href="#" class="logo-footer">
                      <img
                        src="/assets/img/logo/COAFormosaMunicipalidad monocromatico.png"
                        alt="Logo"
                        className="img-logo img-fluid"
                      />
                    </a>
                    <h3>HCD</h3>
                  </div>

                  <p>
                    San Martín 500 <br />
                    Formosa, Formosa
                    <br />
                    Argentina <br />
                    <br />
                    {/* <strong>Phone:</strong> +1 5589 55488 55<br /> */}
                    <strong>Email:</strong> <br />
                    honorableconcejodeliberantefsa@gmail.com
                    <br />
                  </p>
                  <div className="social-links text-md-right pt-3 pt-md-0 social-facebook">
                    <a
                      href="https://www.facebook.com/profile.php?id=61557813812573"
                      className="facebook"
                      target="blank" 
                    >
                      <i className="bx bxl-facebook" />
                      
                    </a>
                    <span>Facebook</span>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 footer-links columna-footer">
                  <h4>Links Útiles</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/" className="nav-link scrollto">
                        Inicio
                      </NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/acerca" className="nav-link scrollto">
                        Acerca
                      </NavLink>
                    </li>

                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a
                        href="https://www.formosatuciudad.gob.ar/"
                        target="blank"
                      >
                        Municipalidad
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="https://www.formosa.gob.ar/" target="blank">
                        Gobierno de Formosa
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-links columna-footer">
                  <h4>Consultas</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/ordenanzas">Ordenanzas</NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/consejales/concejales">Consejales</NavLink>
                    </li>

                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="#">Política de Privacidad</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start d-flex">
              <div className="copyright me-2">
                © Copyright{" "}
                <strong>
                  <span></span>
                </strong>
                . Todos los derechos reservados
              </div>
              <div className="credits ms-2">
                Powered by <a href=""></a>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* <div id="preloader"></div> */}
        <a href="#" className="back-to-top" ref={backtotopRef}>
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
