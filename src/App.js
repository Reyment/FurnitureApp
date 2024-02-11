import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavbarComponent from './components/NavbarComponent';
import About from './pages/About';
import Product, { products } from './pages/Product';
import FooterComponent from './components/FooterComponent';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './Contexts/CartContext';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter >
      <CartProvider>


        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ProductDetail products={products} />} />

        </Routes>
        <FooterComponent />
      </CartProvider>



    </BrowserRouter>
  );
}

export default App;
