import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const BootstrapTableFetch = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // 使用非同步函式從網路獲取產品資料
        const fetchProducts = async () => {
            try {
                const response = await
                    fetch('http://localhost:3000/products.txt');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default BootstrapTableFetch;