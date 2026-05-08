import React, { Component } from 'react';
import names from './names.json';

class WithFilterText extends Component {

    state = { 
        items: names, 
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
        const { text} = this.state;
        const newItems = names.filter( name => name.includes(text) );

        this.setState({
            items: newItems
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

export default WithFilterText;