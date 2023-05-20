import { useParams } from 'react-router-dom';
import MediaCard from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import getItems from '../utils/useFirestore';

function DetalleProducto() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productos = await getItems();
      setProductos(productos);
    };

    fetchData();
  }, []);
  const producto = productos.filter(p => p.id === parseInt(id));

  return (
    <div className="containercard">
        {producto.map(producto => {return <MediaCard producto = {producto} isDetail = {true} />})}
    </div>
  );
};

export default DetalleProducto;