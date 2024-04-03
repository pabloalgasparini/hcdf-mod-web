import React from "react";
import PdfList from "../Components/PdfList";

function SesionesOrdinarias() {
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Sesiones Ordinarias</h2>
          <p>Honorable Consejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content">
          {/* <div className="col-lg-6">
          <p>
            El Honorable Concejo Deliberante de la Ciudad de Formosa, como
            entidad legislativa local, despliega un rol primordial en el
            desarrollo y la gestión de nuestra comunidad. Guiados por los
            pilares de transparencia, representatividad y participación
            ciudadana, nuestro Concejo Deliberante se dedica infatigablemente
            a impulsar el bienestar y el progreso de todos los ciudadanos.
            Constituido por representantes democráticamente elegidos, el
            Concejo Deliberante asume la vital tarea de formular y aprobar
            normativas que regulan diversos aspectos de la vida en nuestra
            urbe. Desde la promulgación de ordenanzas municipales hasta la
            supervisión de las acciones del ejecutivo local, nuestro Concejo
            ejerce su función con la máxima integridad y un firme compromiso
            con el interés público. Además de su labor legislativa, el
            Honorable Concejo Deliberante de Formosa también desempeña un
            papel crucial en la promoción del diálogo y la concertación entre
            los distintos sectores sociales y políticos de nuestra localidad.{" "}
            <br /> A través de comisiones de trabajo y audiencias públicas,
            fomentamos la participación activa de la ciudadanía en la toma de
            decisiones que afectan su vida cotidiana.
          </p>
        </div> */}
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                06-03-24 A LAS 19:00 Hs.{" "}
                <PdfList fileName="1° Sesion Ordinaria 06.03.24.pdf" />
              </li>

              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                13-03-24 A LAS 19:00 Hs.
                <PdfList fileName="2° Sesion Ordinaria 11.03.24.pdf" />
              </li>
              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                20-03-24 A LAS 19:00 Hs.
                <PdfList fileName="3° Sesion ORdinaria 18.03.24.pdf" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SesionesOrdinarias;
