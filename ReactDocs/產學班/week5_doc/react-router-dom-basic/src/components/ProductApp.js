import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProductApp() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  function Home() {
    return <h1>Welcome to the Home Page!</h1>;
  }

  function Products({ products }) {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price}
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    );
  }

  function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    function handleAddToCart() {
      addToCart(product);
    }

    return (
      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  }

  function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, cur) => acc + cur.price, 0);

    function handleRemoveFromCart(product) {
      removeFromCart(product);
    }

    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    );
  }

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
        <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default ProductApp;
