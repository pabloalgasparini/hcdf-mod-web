import { app } from "../../Db";
  
  
  // Función para obtener la lista de documentos
 export const obternerResoluciones = async (setResolucion, setBuscando) => {
    try {
        const docusList = await app.firestore().collection("resoluciones").get();
        setResolucion(docusList.docs.map((doc) => doc.data())); // Actualizar la lista de documentos
        setBuscando(false); 
    } catch (error) {
        console.error("Error al obtener los documentos:", error.message);
        // Aquí podrías agregar lógica adicional para mostrar un mensaje de error al usuario
    }
}