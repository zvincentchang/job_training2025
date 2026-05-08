import React from 'react'
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
  export default Cart;