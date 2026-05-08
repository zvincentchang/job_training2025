import React, { Component } from 'react';

// props 接收從父組件上面傳下來子組件的屬性
class Item2 extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>props.text:{this.props.text}</li>
                    <li>props.price:{this.props.price + 1}</li>
                    <li>props.children:{this.props.children}</li>
                </ol>
            </div>
        );
    }
}

export default Item2;