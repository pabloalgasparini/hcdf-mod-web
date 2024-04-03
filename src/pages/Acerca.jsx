import React, { useEffect } from "react";
import "./acerca.css";

function Acerca() {
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Acerca del HCD</h2>
          <p>Honorable Consejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content">
          <div className="col-lg-6">
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
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li>
                <i className="ri-circle-fill" />
                Rol legislativo clave en la gestión local.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Compromiso con la transparencia y representatividad.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Elaboración y aprobación de normativas municipales.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Fiscalización de las acciones del ejecutivo local.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Promoción del diálogo y la concertación social y política.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Fomento de la participación ciudadana mediante comisiones y
                audiencias públicas.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Búsqueda de la excelencia y la eficiencia en la gestión pública.
              </li>
              <li>
                <i className="ri-circle-fill" />
                Colaboración estrecha con todos los sectores de la sociedad.
              </li>
              <li>
                <i className="ri-circle-fill" /> Construcción de una ciudad más
                justa, inclusiva y próspera.
              </li>
              <li>
                <i className="ri-circle-fill" /> Compromiso firme con el
                servicio público y el bien común.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acerca;
