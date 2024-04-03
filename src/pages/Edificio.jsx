import React, { useEffect } from "react";
import "./edificio.css";

function Edificio() {
  useEffect(() => {
    const imgContainers = document.querySelectorAll(".col-lg-4 img");
    imgContainers.forEach((imgContainer) => {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.innerHTML = imgContainer.getAttribute("data-overlay-text") || ""; // Aquí puedes personalizar el texto que deseas mostrar
      imgContainer.parentNode.appendChild(overlay);

      imgContainer.parentNode.classList.add("position-relative");
      imgContainer.addEventListener("mouseover", () => {
        overlay.style.opacity = "1";
      });
      imgContainer.addEventListener("mouseout", () => {
        overlay.style.opacity = "0";
      });
    });
  }, []);

  return (
    <div>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Edificio</h2>
            <p>
              Fotos del edificio del Honorable Concejo Deliberante.
            </p>
          </div>
          <div className="row">
            
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="image-container position-relative">
                <img
                  src="../assets/img/edificio/foto8.jpeg"
                  alt="Descripción de la imagen"
                  className="imagen img-fluid mt-4"
                  data-overlay-text="Fachada edificio día"
                />
                <div className="overlay"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto9.jpg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Fachada edificio noche"
              />
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto10.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Perspectiva edificio noche"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto3.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Recinto deliberativo"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto4.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Salón central"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto2.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Recinto deliberativo"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto6.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Salón de conferencias"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto7.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Despacho presidencial"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto1.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Atril de autoridades deliberativas"
              />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="image-container position-relative">
              <img
                src="../assets/img/edificio/foto5.jpeg"
                alt="Descripción de la imagen"
                className="img-fluid mt-4"
                data-overlay-text="Administración"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Edificio;
