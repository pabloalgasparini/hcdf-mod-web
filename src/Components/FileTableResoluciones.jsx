import React from 'react';
import { faFilePdf, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'; // Importar PropTypes

const FileTable = ({ files }) => {
  return (
    (files.length > 0) ? (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">N˚ de resolución</th>
            <th scope="col">Descripción</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{getFileNumber(file.nombres)}</td>
              <td>{getFileDescription(file.nombres)}</td>
              <td><a href={file.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePdf} /></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <>
      <ul>
        <li className="archivo">
        <FontAwesomeIcon icon={faBan} className="icono-rojo" />  No se encontró el archivo,
          contactenos al siguiente correo electrónico <b>honorableconcejodeliberantefsa@gmail.com</b>
        </li>
      </ul>
     </>
    )
  );
};

// Función para obtener el número del nombre del archivo
const getFileNumber = (fileName) => {
  return fileName.split(' - ')[0];
};

// Función para obtener la descripción del nombre del archivo
const getFileDescription = (fileName) => {
  return fileName.split(' - ')[1];
};

// Validación de props
FileTable.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired, // URL del archivo (string, requerido)
      nombres: PropTypes.string.isRequired, // Nombre del archivo (string, requerido)
    })
  ).isRequired // Arreglo de objetos de archivo, requerido
};

export default FileTable;
