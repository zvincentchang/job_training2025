import React, { Component } from 'react';

// WrappedComponent 傳入子組件 CommonViewList
// class extends Component(Anonymous class匿名類別)
export default WrappedComponent => class extends Component {

    state = {
        items: [],
        text: ''
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value
        });
    };

    // 文字新增
    onSubmit = e => {
        e.preventDefault(); // 避免表單送出預設跳頁行為
        const {text, items} = this.state;
        const appendItem = [...items, text];
        this.setState({
            items: appendItem
        });        
    };

    render() {
        const {items, text} = this.state;
        return <WrappedComponent            
                {...this.props}
                items={items}
                text={text}
                onChangeText={this.onChangeText}
                onSubmit={this.onSubmit}
        />        
    }
};

