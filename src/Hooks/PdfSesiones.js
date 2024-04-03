import { app } from "../../Db";

const storage = app.storage();

const getPdfUrls = async (fileName) => {
  try {
    const storageRef = storage.ref();
    const pdfFilesSnapshot = await storageRef.listAll();

    const pdfUrls = await Promise.all(
      pdfFilesSnapshot.items.map(async (item) => {
        const url = await item.getDownloadURL();
        return { name: item.name, url };
      })
    );

    console.log("PDF URLs:", pdfUrls);

    // Filtrar por el nombre del archivo
    const filteredPdfUrls = pdfUrls.filter(pdf => {
      console.log("PDF Name:", pdf.name);
      console.log("Provided File Name:", fileName);
      return pdf.name && pdf.name.trim() === fileName.trim();
    });

    console.log("Filtered PDF URLs:", filteredPdfUrls);

    return filteredPdfUrls;
  } catch (error) {
    console.error("Error al obtener los enlaces de descarga de los archivos PDF:", error);
    return [];
  }
};

export { getPdfUrls };




