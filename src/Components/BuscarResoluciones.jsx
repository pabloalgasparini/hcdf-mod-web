// En BuscarOrdenanza.jsx
import React from "react";
import { useState } from "react";
//import FileList from "./FileList";
import { obternerResoluciones } from "../Hooks/../Hooks/ObtenterResolución";
import { filteredFiles } from "../Hooks/FilteredFilesHook";
import FileTableResoluciones from "./FileTableResoluciones";
import "../pages/ordenanzas.css";

export const BuscarResolucion = () => {
  const [docusSearch, setDocusSearch] = useState(""); // Estado para almacenar el término de búsqueda
  const [resoluciones, setResolucion] = useState([]); // Estado para almacenar la lista de archivos
  const [isSearching, setIsSearching] = useState(false); // Estado para controlar si se está realizando una búsqueda
  const [showFiles, setShowFiles] = useState(false); // Estado para controlar si se deben mostrar los archivos
  const [buscando, setBuscando] = useState(false); // Estado para controlar "Buscando..."

  // Manejar la búsqueda cuando se aprieta el botón buscar
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setBuscando(true); // Indicar que se está realizando una búsqueda
    await obternerResoluciones(setResolucion, setBuscando); // Obtener documentos y finalizar búsqueda
    setShowFiles(true); // Mostrar archivos después de la búsqueda
  };

  // Manejador para abrir el archivo cuando se hace clic
  const handleFileClick = (url) => {
    window.open(url, "_blank");
    setShowFiles(false);
  };

  return (
    <div>
      <div className="row search-container">
        <div className="col-md-8 label-p">
          <label htmlFor="floatingEmptyPlaintextInput" className="form-label">
            *Ingrese palabra clave o el número de la resolución.
          </label>
          <form onSubmit={submitHandler} className="d-flex form">
            <input
              className="form-control form-ord flex-grow-1"
              type="text"
              value={docusSearch}
              onChange={(e) => {
                setDocusSearch(e.target.value);
                setShowFiles(false);
              }}
              required="required"
            />
            <button type="submit" className=" btn-ordenanza">
              Buscar
            </button>
          </form>
        </div>
      </div>

      {buscando && <h2 className="buscando">Buscando...</h2>}
      {showFiles && !buscando && (
        <FileTableResoluciones
          files={filteredFiles(isSearching, resoluciones, docusSearch)}
          handleFileClick={handleFileClick}
        />
      )}
    </div>
  );
};
