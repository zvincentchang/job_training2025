import React, { Component } from 'react';

class Header extends Component {
    render() {

        const{ orders } = this.props;

        return (
            <div>
                <span>購物車({orders.length})</span>
                <br/>
                {orders.map(
                    o => <div key={o} style={{display: 'inline-block'}}>{o} &nbsp;</div>
                )}
                <hr/>
            </div>
        );
    }
}

export default Header;