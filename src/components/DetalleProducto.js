import { useParams } from 'react-router-dom';
import MediaCard from './Card';

function DetalleProducto() {
  const { id } = useParams();
  const productos = [
    { id: 1, name: 'NIKE AIR MAX 90', description: 'Estas zapatillas son icónicas por su diseño clásico y cómodo. Cuentan con una unidad Air Max en el talón para mayor amortiguación.', image: 'https://static.runnea.com/images/202209/nike-air-max-90-futura-sneakers-200x200x80xX-1.jpg?1', category: "1" },
    { id: 2, name: 'NIKE AIR MAX 270', description: 'Las Air Max 270 son conocidas por su gran unidad Air Max en el talón, lo que las hace ideales para actividades que requieren mucho impacto. Además, tienen un diseño moderno y llamativo.', image: 'https://static.runnea.com/images/202211/nike-air-max-270-sneakers-200x200x80xX.png?1', category: "1" },
    { id: 3, name: 'NIKE AIR MAX 95', description: 'Estas zapatillas tienen un diseño único con capas superpuestas y una unidad Air Max en el talón y en la parte delantera del pie para una mayor amortiguación.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCk__pIq8xQfse-Sa_MDMlUdMrw3daW2va0cqESoHkYXdpGn0S69ycSwBW4upMGuJaJ8E&usqp=CAU', category: "1" },
    { id: 4, name: 'NIKE DRI-FIT', description: 'Esta remera de Nike es ideal para entrenamientos intensos, gracias a su tecnología Dri-FIT que absorbe el sudor y mantiene el cuerpo seco y cómodo.', image: 'https://cdn.shopify.com/s/files/1/0129/6942/products/CZ9046-454-PHSFM001-2000_200x.png?v=1651239575', category: "2" },
    { id: 5, name: 'NIKE SPORTWEAR', description: ' Esta remera tiene un diseño clásico de Nike y está confeccionada con materiales suaves y cómodos, lo que la hace perfecta para uso diario.', image: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fimages.footlocker.com%2Fis%2Fimage%2FEBFL2%2FN5169010_om1_small.jpg', category: "2" },
    { id: 6, name: 'NIKE JORDAN JUMPMAN', description: 'Esta remera cuenta con el icónico logo Jumpman de Michael Jordan y está confeccionada con materiales suaves y transpirables.', image: 'https://premiumsport.com.co/wp-content/uploads/2022/03/2-33-200x200.png', category: "2" },
  ];
  const producto = productos.filter(p => p.id === parseInt(id));

  return (
    <div className="containercard">
        {producto.map(producto => {return <MediaCard producto = {producto} isDetail = {true} />})}
    </div>
  );
};

export default DetalleProducto;