// useEffectContador.js
import { useEffect, useState } from 'react';
import { app } from "../../Db";

const useContador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const db = app.firestore();
    const contadorRef = db.collection('contadores').doc('contador');

    const unsubscribe = contadorRef.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (data) {
        setContador(data.valor);
      }
    });

    return () => unsubscribe();
  }, []);

  return contador;
};

export default useContador;
