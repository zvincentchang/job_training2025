import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import OrderContext from './OrderContext';

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
        const { orders } = this.state;
        const contextValue = {
            orders,
            addOrder: this.addOrder
        };
        return (
            <div>
                <OrderContext.Provider value={contextValue}>
                    <Header/>
                    <ProductList/>
                </OrderContext.Provider>
            </div>
        );
    }
}

export default AppContext;