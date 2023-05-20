import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { firestore } from '../firebase/firebase.config'; // Importa el servicio de Firestore previamente configurado

const getItems = async () => {
      try {
        const res = await getDocs(collection(firestore, 'items'));
        const items = res.docs.map((doc) => JSON.parse(JSON.stringify(doc.data())));
        console.log(items);
        return items;
      } catch (error) {
        console.log('Error al obtener los items:', error);
      }
    };

export default getItems;