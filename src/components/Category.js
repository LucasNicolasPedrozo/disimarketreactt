import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaCard from './Card';
import { getProductosPorId } from '../utils/useFirestore';

export default function Category() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    const obtenerProductos = async () => {
      const productosData = await getProductosPorId(id);
      setProductos(productosData);
    };

    obtenerProductos();
  }, [id]);

  return (
    <div className="containercard">
     {productos && productos.map(producto => {return <MediaCard producto = {producto} isDetail = {false} />})}
    </div>
  );
};
