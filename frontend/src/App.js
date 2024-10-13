
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import ShowNow from './pages/ShopNow';
import YourOrders from './pages/YourOrders';

const App = () => {
  return (
    <CartProvider> {}
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/show-now" element={<ShowNow />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/orders" element={<YourOrders />} /> {/* New route added */}
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; 2024 IMR MART. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
