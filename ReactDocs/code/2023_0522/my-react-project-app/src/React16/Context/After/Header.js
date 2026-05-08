import React, { Component } from 'react';
import OrderContext from './OrderContext';

class Header extends Component {
    render() {
        return (
            // <div>
            //     <OrderContext.Consumer>
            //         {(contextValue) => (`購物車(${contextValue.orders.length})`)}
            //     </OrderContext.Consumer>
            //     <br/>
            //     <OrderContext.Consumer>
            //         {(contextValue) => 
            //           contextValue.orders.map(
            //             o => <div key={o} style={{display: 'inline-block'}}>{o} &nbsp;</div>
            //         )}
            //     </OrderContext.Consumer>
            //     <hr/>
            // </div>
            <div>
                <OrderContext.Consumer>
                    {(contextValue) => (                        
                        <div>                            
                            購物車({contextValue.orders.length})
                            <br/>
                            {contextValue.orders.map(
                                o => <div key={o} style={{display: 'inline-block'}}>{o} &nbsp;</div>)}
                        </div>
                    )}
                </OrderContext.Consumer>
                <hr/>
            </div>
        );
    }
}

export default Header;