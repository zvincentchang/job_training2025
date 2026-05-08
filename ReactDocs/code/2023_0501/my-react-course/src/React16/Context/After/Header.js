import React, { Component } from 'react';
import OrderContext from './OrderContext';

class Header extends Component {
    render() {

        // const { orders } = this.props;

        return (
            // <OrderContext.Consumer> 裡面是一個函式所傳入的參數就是 <OrderContext.Provider> 的 value
            <div>
                <span>
                    <OrderContext.Consumer>
                        {(contextValue) => ( 
                            `購物車(${contextValue.orders.length})` 
                        )}
                    </OrderContext.Consumer>
                </span>
                <br/>
                <OrderContext.Consumer>
                    {(contextValue) => ( 
                        contextValue.orders.map(
                            (order) => (
                                <div style={{display : 'inline-block'}}>                                    
                                    <span> {order} &nbsp;</span>                                    
                                </div>
                            )
                        )
                    )}
                </OrderContext.Consumer>
                <hr/>
            </div>
        );
    }
}

export default Header;