import React from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function BasicRoute() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]; 
 

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(product) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default BasicRoute;
