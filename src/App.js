import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Category from './components/Category';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Productos />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;
