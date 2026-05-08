// ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 使用axios進行GET請求取得產品資料
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>產品列表</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <Link to={`/product/${product.id}`}>
                <div className="img">
                  <img className="card-img-top" src={product.image} alt="" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">價格: {product.price}</p>
                  {/* 這裡可以顯示其他產品資訊 */}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
