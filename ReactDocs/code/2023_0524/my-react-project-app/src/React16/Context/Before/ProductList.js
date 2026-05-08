import React, { Component } from 'react';
import productsData from '../productsData.json';
import Product from './Product';

class ProductList extends Component {
    render() {

        const products = productsData;
        const { addOrder } = this.props;

        return (
            <div>
                <ul>
                   {products.map(
                       p => <Product {...p} key={p.id} addOrder={addOrder} />
                   )}
                </ul>
            </div>
        );
    }
}

export default ProductList;