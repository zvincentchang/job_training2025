import React, { Component } from 'react';

class Product extends Component {
    
    render() {

        const { id,name,addOrder } = this.props;

        return (
            <li>
                <label>{id}.{name}</label>
                <button onClick={() => addOrder(id)}>+</button>
            </li>
        );
    }
}

export default Product;