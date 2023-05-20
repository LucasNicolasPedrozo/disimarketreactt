import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, aumenta la cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.precio);
    } else {
      // Si el producto no está en el carrito, agrega uno nuevo
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const restToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct && product.quantity > 1) {
      // Si el producto ya está en el carrito, resta la cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
            removeItem(product.id);
    }
  };

  const removeItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart, restToCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };