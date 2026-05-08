import React, { Component } from 'react';

class Header extends Component {
    render() {

        const { orders } = this.props;

        return (
            <div>
                <span>購物車({orders.length})</span>
                <br/>
                {orders.map(
                    (order) => (
                        <div style={{display : 'inline-block'}}>                                    
                            <span> {order} &nbsp;</span>                                    
                        </div>
                    )
                )}
                <hr/>
            </div>
        );
    }
}

export default Header;