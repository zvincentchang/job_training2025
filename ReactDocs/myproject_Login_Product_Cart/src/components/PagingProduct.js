import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const PagingProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);

    useEffect(() => {
        // 'https://fakestoreapi.com/products/'
        axios.get('http://localhost:8080/products/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
            <h1>Products</h1>
            <div className="row">
                {currentProducts.map(product => (
                    <div key={product.id} className="col-md-3">
                        <div className="card">
                            <img src={product.image} className="card-img-top" style={{ width: '100%', height: '360px' }} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <a onClick={() => setCurrentPage(number)} className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PagingProducts;