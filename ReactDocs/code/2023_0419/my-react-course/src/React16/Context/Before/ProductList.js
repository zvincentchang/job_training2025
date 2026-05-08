import React, { Component } from 'react';
import productsData from '../productsData.json';
import Product from './Product';

class ProductList extends Component {

    render() {

        const products = productsData;
        const { addOrder } = this.props;

        return (
            <ul>
                {products.map(
                    // AppContext → ProductList → Product
                    // {...product} 將product的所有欄位(id、name)一次全部傳入
                    // 對於Product而言addOrder並非自身要使用，但卻要協助傳遞
                    product => <Product {...product} key={product.id} addOrder={addOrder}/>
                )}
            </ul>
        );
    }
}

export default ProductList;