import React, { useEffect } from "react";
import useContador from "../Hooks/UseContador";
import incrementarContador from "../Hooks/IncrementarContador";
import "./ContadorVistas.css";

function ContadorVistas() {
  const contador = useContador();
  useEffect(() => {
    incrementarContador();
  }, []);

  return (
    <div>
      <div className="text-left">
        <a href="#" className="btn-get-started scrollto">
          <span className="label">visitas: </span>
          <span className="contador">{contador}</span>
        </a>
      </div>
    </div>
  );
}

export default ContadorVistas;
