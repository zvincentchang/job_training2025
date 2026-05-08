import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class withAddText extends Component {

    state = {
        items: [],
        text: ''
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value
        });
    };

    onSubmit = e => {
        // 取消form表單預設submit導頁
        e.preventDefault(); 
        const { items, text} = this.state;
        // const newItem = [...items, text];
        this.setState({
            items: [...items, text]
        });
    };

    render() {
        const { items } = this.state;
        const { WrappedComponentView } = this.props;
        return (
            <WrappedComponentView
                onSubmit={this.onSubmit}
                onChangeText={this.onChangeText}
                items={items}
            />
        );
    }
}

export default withAddText;