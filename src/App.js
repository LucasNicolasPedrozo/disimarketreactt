import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Category from './components/Category';
import DetalleProducto from './components/DetalleProducto';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Productos />} />
          <Route path="/item/:id" element={<DetalleProducto />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
