import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

class AppContext extends Component {

    state = {
        orders: []
    };

    addOrder = (order) => {
        this.setState({
            orders: [...this.state.orders, order]
        });
    };

    render() {
        return (
            <div>
                <Header orders={this.state.orders}/>
                <ProductList addOrder={this.addOrder} />
            </div>
        );
    }
}

export default AppContext;