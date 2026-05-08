import React from 'react';
import { Link } from 'react-router-dom';
function ProductList() {
    const products = [
        { id: 1, name: "Product 1", description: "This is the first product." },
        { id: 2, name: "Product 2", description: "This is the second product." },
        { id: 3, name: "Product 3", description: "This is the third product." },
    ];

    return (
        <div>
            <h2>Product List</h2>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Product Id</th>
                        <th> Product Name</th>
                        <th> Product Description</th>                      
                        <th> Link</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product =>                                
                                <tr key = {product.id}>                                    
                                    <td> {product.id }</td>
                                    <td> {product.name }</td>
                                    <td> {product.description }</td>
                                    <td><Link key={product.id} to={`/products/${product.id}`}>Link</Link></td>
                                </tr>

                        )
                    }
                </tbody>
            </table>           
        </div>
    );
}

export default ProductList;