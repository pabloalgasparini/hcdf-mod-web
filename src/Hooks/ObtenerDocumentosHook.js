import { app } from "../../Db";
  
  
  // Función para obtener la lista de documentos
 export const obtenerDocumentos = async (setDocus, setBuscando) => {
    try {
        const docusList = await app.firestore().collection("archivos").get();
        setDocus(docusList.docs.map((doc) => doc.data())); // Actualizar la lista de documentos
        setBuscando(false); 
    } catch (error) {
        console.error("Error al obtener los documentos:", error.message);
        // Aquí podrías agregar lógica adicional para mostrar un mensaje de error al usuario
    }
}