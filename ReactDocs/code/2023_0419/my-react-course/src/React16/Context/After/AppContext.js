import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import OrderContext from './OrderContext';

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
        // AppContext → ProductList → Product
        const { orders } = this.state;
        const contextValue = {
            orders,
            addOrder: this.addOrder
        };
        return (
            <div>
                <OrderContext.Provider value={contextValue}>
                    {/* 
                    使用 Context API 之前  
                    <Header orders={orders}/>
                    <ProductList addOrder={this.addOrder}/> 
                    */}
                    <Header/>
                    <ProductList/>
                </OrderContext.Provider>
            </div>
        );
    }
}

export default AppContext;