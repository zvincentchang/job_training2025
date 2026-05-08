import React, { Component } from 'react';
import OrderContext from './OrderContext';

class Product extends Component {
    
    render() {

        const { id,name } = this.props;
        // <button onClick={() => addOrder(id)}>+</button>
        return (
            <li>
                <label>{id}.{name}</label>
                <OrderContext.Consumer>
                   {(contextValue) => (
                        <button onClick={() => contextValue.addOrder(id)}>+</button>
                   )}
                </OrderContext.Consumer>
            </li>
        );
    }
}

export default Product;