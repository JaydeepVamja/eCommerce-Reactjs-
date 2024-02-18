import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './page/Home';
import ProductSingle from './components/ProductSingle';
import ShopProduct from './components/ShopProduct';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ShopProduct />} />
          <Route path='/product_details/:id' element={<ProductSingle />} />
          <Route path='/shopping_cart' element={<Cart />} />
          <Route path='/checkOut' element={<CheckOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
