import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { productId } = useParams();
    const products = [
        { id: 1, name: "Product 1", description: "This is the first product." },
        { id: 2, name: "Product 2", description: "This is the second product." },
        { id: 3, name: "Product 3", description: "This is the third product." },
    ];
    const product = products.find(p => p.id === Number(productId));
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetail;

 
