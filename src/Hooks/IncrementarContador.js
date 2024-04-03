import { app } from "../../Db";
import firebase from "firebase/compat/app";



const db = app.firestore();
const contadorRef = db.collection('contadores').doc('contador');

const incrementarContador = async () => {
  try {
    await contadorRef.set({
      valor: firebase.firestore.FieldValue.increment(1)
    }, { merge: true });
    console.log('Contador incrementado exitosamente');
  } catch (error) {
    console.error('Error al incrementar el contador:', error);
  }
};


export default incrementarContador;