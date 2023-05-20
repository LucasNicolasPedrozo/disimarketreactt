import MediaCard from './Card';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { getItems } from '../utils/useFirestore';
import { useState } from 'react';
import { useEffect } from 'react';

function Productos() {
  const { addToCart } = useContext(CartContext);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productos = await getItems();
      setProductos(productos);
    };

    fetchData();
  }, []);
  return (
    <div className="containercard">
        {productos.map(producto => {return <MediaCard isDetail = {false} producto = {producto} />})}
    </div>
  )
};

export default Productos;