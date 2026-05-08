import React, { useEffect, useState } from 'react';
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [products]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1>產品列表</h1>
            {products.length === 0 ? (
                <p>目前沒有產品</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default ProductList;
