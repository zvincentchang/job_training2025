import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

class AppContext extends Component {

    // 購物車訂單商品編號清單
    state = {
        orders: []
    };

    addOrder = (order) => {
        this.setState({
            orders: [...this.state.orders, order]
        });
    };

    render() {
        // AppContext → Header
        // AppContext → ProductList → Product
        return (
            <div>
                <Header orders={this.state.orders}/>
                <ProductList addOrder={this.addOrder}/>
            </div>
        );
    }
}

export default AppContext;