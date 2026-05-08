import React, { Component } from 'react';
import names from './names.json';

// WrappedComponent 傳入子組件 CommonViewList
export default WrappedComponent => class extends Component {

    state = {
        items: names,
        text: ''
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value
        });
    };
    
    // 文字過濾
    onSubmit = e => {
        e.preventDefault();
        const {text} = this.state;
        const filterItem = names.filter(name => name.includes(text));
        this.setState({
            items: filterItem
        });        
    };

    render() {
        const {items, text} = this.state;
        /*
        {...this.props} 必須傳入
        連同最上層組件(HocAppTow btnText),在傳入給下層組件時才會繼續傳遞下層組件
        */
        return <WrappedComponent
                {...this.props}
                items={items}
                text={text}
                onChangeText={this.onChangeText}
                onSubmit={this.onSubmit}
        />        
    }
};