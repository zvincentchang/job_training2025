import React, { Component } from 'react';
import productsData from '../productsData.json';
import Product from './Product';

class ProductList extends Component {
    render() {

        const products = productsData;
        
        return (
            <div>
                <ul>
                   {products.map(
                       p => <Product {...p} key={p.id}/>
                   )}
                </ul>
            </div>
        );
    }
}

export default ProductList;