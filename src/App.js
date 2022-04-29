//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Order from './pages/Order';
import Product from './pages/Product';
import Footer from './components/Footer';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="orders" element={<Order />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
