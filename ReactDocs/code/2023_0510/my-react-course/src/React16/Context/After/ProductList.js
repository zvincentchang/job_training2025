import React, { Component } from 'react';
import Product from './Product';
import productsData from '../productsData.json';

class ProductList extends Component {

    render() {

        const products = productsData;
        // const { addOrder } = this.props;

        return (
            <ul>
                {products.map(                    
                    // product => <Product {...product} key={product.id} addOrder={addOrder}/>
                    // AppContext → ProductList → Product
                    // 透過Context API 就不須要再轉一手傳入addOrder函數
                    product => <Product key={product.id} {...product} />
                )}
            </ul>
        );
    }
}

export default ProductList;