import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { firestore } from '../firebase/firebase.config'; // Importa el servicio de Firestore previamente configurado

export const getItems = async () => {
      try {
        const res = await getDocs(collection(firestore, 'items'));
        const items = res.docs.map((doc) => JSON.parse(JSON.stringify(doc.data())));
        console.log(items);
        return items;
      } catch (error) {
        console.log('Error al obtener los items:', error);
  }
};

export const getProductosPorId = async (id) => { 
try {
    const q = await getDocs(query(collection(firestore, 'items'), where('category', '==', parseInt(id))));
    const productos = q.docs.map((doc) => doc.data());

    return productos;
  } catch (error) {
    console.log('Error al obtener los productos:', error);
    return [];
  }
};
