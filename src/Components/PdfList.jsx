import React, { useState, useEffect } from "react";
import { getPdfUrls } from "../Hooks/PdfSesiones";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const PdfList = ({ fileName }) => {
  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    const fetchPdfUrls = async () => {
      const urls = await getPdfUrls(fileName);
      setPdfUrls(urls);
    };

    fetchPdfUrls();
  }, [fileName]);

  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {pdfUrls.map((pdf, index) => (
        <div key={index} className="pdf-item" onClick={() => handlePdfClick(pdf.url)}>
          <FontAwesomeIcon icon={faFilePdf} style={{cursor: 'pointer'}} />
        </div>
      ))}
    </div>
  );
};

export default PdfList;



