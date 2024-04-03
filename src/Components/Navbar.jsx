import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };



  return (
    <div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <a href="#" className="logo">
          <img src="/assets/img/logo/COAFormosaMunicipalidad monocromatico.png" alt="Logo" className="img-fluid" />
        </a>

        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="#">HCD</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
              <NavLink to="/" className="nav-link scrollto" onClick={handleClick}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/acerca" className="nav-link scrollto">
                  Acerca
                </NavLink>
              </li>
              <li>
                <li className="dropdown">
                  <a href="#">
                    <span>Institucional</span>{" "}
                    <i className="bi bi-chevron-down" />
                  </a>
                  <ul>
                    <li>
                      <NavLink
                        to="/institucional/autoridadesActuales"
                        className="nav-link scrollto"
                      >
                        Autoridades Actuales
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/institucional/autoridadesAnteriores"
                        className="nav-link scrollto"
                      >
                        Autoridades Anteriores
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/institucional/edificio"
                        className="nav-link scrollto"
                      >
                        Edificio
                      </NavLink>
                    </li>
                    {/* <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li> */}
                  </ul>
                </li>
                {/* <NavLink to="/institucional" className="nav-link scrollto">
                  Institucional
                </NavLink> */}
                {/* <a className="nav-link scrollto" href="#services">
                    Institucional
                  </a> */}
              </li>
              {/* <li>
                  <a className="nav-link scrollto o" href="#portfolio">
                    Portfolio
                  </a>
                </li> */}
              <li className="dropdown">
                <a href="#">
                  <span>Concejales</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <NavLink
                      to="/consejales/concejales"
                      className="nav-link scrollto"
                    >
                      Concejales
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Bloque de Concejales</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/pj"
                        className="nav-link scrollto"
                      >
                        Bloque PJ
                      </NavLink>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/ucr"
                        className="nav-link scrollto"
                      >
                        Bloque UCR
                      </NavLink>
                      <li>
                        <NavLink
                          to="/consejales/bloqueDeConcejales/nuevoPais"
                          className="nav-link scrollto"
                        >
                          Bloque NUEVO PAÍS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/consejales/bloqueDeConcejales/5DeMarzo"
                          className="nav-link scrollto"
                        >
                          Bloque 5 de MARZO
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/consejales/bloqueDeConcejales/pro"
                          className="nav-link scrollto"
                        >
                          Bloque PRO
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li> */}
                </ul>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="#team">
                    Consejales
                  </a> */}
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Ordenanzas</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                 
                  {/* <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}

                 
                  <li>
                  <NavLink to="/ordenanzas/ordenanzas" className="nav-link scrollto">
                  Ordenanzas
                </NavLink>
                  </li>
                
                  <li>
                  <NavLink to="/ordenanzas/resoluciones" className="nav-link scrollto">
                  Resoluciones
                </NavLink>
                  </li>
                </ul>
              </li>
              {/* <li>
                <NavLink to="/ordenanzas" className="nav-link scrollto">
                  Ordenanzas
                </NavLink>
              </li> */}
              <li className="dropdown">
                <a href="#">
                  <span>Legislativo</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                 
                  {/* <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}

                 
                  <li>
                    <NavLink
                      to="/legislativo/sesionesOrdinarias"
                      className="nav-link scrollto"
                    >
                      Sesiones Ordinarias
                    </NavLink>
                  </li>
                
                  <li>
                    <a
                      href="https://www.facebook.com/FormosaTuCiudad/videos/524025079814022"
                      target="_blank"
                    >
                      sesiones en vivo
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contacto" className="nav-link scrollto">
                  Contacto
                </NavLink>
                {/* <a className="nav-link scrollto" href="#contact">
                    Contacto
                  </a> */}
              </li>
              <li>{/* <ContadorVistas /> */}</li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}

export default Navbar;
