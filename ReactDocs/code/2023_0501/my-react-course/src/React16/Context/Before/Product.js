import React, { Component } from 'react';

class Product extends Component {
    render() {

        const { id, name, addOrder } = this.props;
        
        return (
            // AppContext → ProductList → Product
            <li>
                <label>{id}.{name}</label>
                <button onClick={() => addOrder(id)}> + </button>
            </li>
        );

    }
}

export default Product;