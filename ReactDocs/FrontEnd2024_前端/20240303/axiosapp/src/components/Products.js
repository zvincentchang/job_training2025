import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Products = ({ products })=> {
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
export default Products;