import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import ContadorVistas from "./ContadorVistas";

function Header() {
  useEffect(() => {
    const toggleNav = (event) => {
      const navbar = document.querySelector("#navbar");
      const toggle = document.querySelector(".mobile-nav-toggle");
      if (toggle && navbar && event.target === toggle) {
        navbar.classList.toggle("navbar-mobile");
        toggle.classList.toggle("bi-list");
        toggle.classList.toggle("bi-x");
      }
    };

    const hideNav = () => {
      const navbar = document.querySelector("#navbar");
      const toggle = document.querySelector(".mobile-nav-toggle");
      if (navbar && navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        toggle.classList.remove("bi-x");
        toggle.classList.add("bi-list");
      }
    };

    document
      .querySelector(".mobile-nav-toggle")
      .addEventListener("click", toggleNav);

    // Ocultar el menú móvil cuando se hace clic en un elemento del menú
    const menuItems = document.querySelectorAll("#navbar ul li a");
    menuItems.forEach((item) => {
      item.addEventListener("click", hideNav);
    });

    // Limpieza del efecto
    return () => {
      document
        .querySelector(".mobile-nav-toggle")
        .removeEventListener("click", toggleNav);
      menuItems.forEach((item) => {
        item.removeEventListener("click", hideNav);
      });
    };
  }, []);

  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="row justify-content-left custom-margin">
              <div className="col-xl-7 col-lg-9 text-left">
                <h1>
                  <p class="word">Honorable</p>
                  <p class="word">Concejo</p>
                  <p class="word">Deliberante</p>
                </h1>
                <h2>Ciudad de Formosa</h2>
              </div>
            </div>

            <ContadorVistas />

            <div className="row icon-boxes">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-university" />
                  </div>
                  <h4 className="title">
                    <a href>Institucional</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="/institucional/autoridadesActuales"
                      className="nav-link scrollto"
                    >
                      Autoridades Actuales
                    </NavLink>

                    <NavLink
                      to="/institucional/autoridadesAnteriores"
                      className="nav-link scrollto"
                    >
                      Autoridades Anteriores
                    </NavLink>

                    <NavLink
                      to="/institucional/edificio"
                      className="nav-link scrollto"
                    >
                      Edificio
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-feather-alt" />
                  </div>
                  <h4 className="title">
                    <a href>Legislativo</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="/legislativo/orden del dia"
                      className="nav-link scrollto"
                    >
                      Orden del día
                    </NavLink>

                    {/* <NavLink
                      to="/legislativo/sesiones"
                      className="nav-link scrollto"
                    >
                      Sesiones
                    </NavLink> */}

                    <NavLink
                      to="/legislativo/sesionesOrdinarias"
                      className="nav-link scrollto"
                    >
                      Sesiones Ordinarias
                    </NavLink>

                    {/* <NavLink
                      to="/legislativo/comisiones"
                      className="nav-link scrollto"
                    >
                      Comisiones
                    </NavLink> */}

                    <li>
                      <a
                        href="https://www.facebook.com/FormosaTuCiudad/videos/524025079814022"
                        target="_blank"
                      >
                        sesiones en vivo
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <h4 className="title">
                    <a href>Concejales</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="/consejales/concejales"
                      className="nav-link scrollto"
                    >
                      Concejales
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-file-alt" />
                  </div>
                  <h4 className="title">
                    <a href>Ordenanzas</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink to="/ordenanzas/ordenanzas" className="nav-link scrollto">
                      Ordenanzas
                    </NavLink>
                    <NavLink
                      to="/ordenanzas/resoluciones"
                      className="nav-link scrollto"
                    >
                      Resoluciones
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>
    </>
  );
}

export default Header;
