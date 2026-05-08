import React, { Component } from 'react';

class Message extends Component {

    state = {
        title: '我是Title',
        text: '我是Text',
        count: 0
    };

    /*
    // 1.透過建構式再綁定回組件 bind(this)    
    constructor(){
        super();
        // 透過建構式綁定函數傳入this組件bind(this)
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState(
            {
               count: this.state.count + 1
            }
        );
    };
  */  

    // 2.改成鍵頭函式 (無須bind綁定)
    updateState = () => {
        // Component event 事件處理
        // 此時的this指的是html元素自身<button>而非React的組件,修改方式以下兩種
        // 1.透過建構式再綁定回組件bind(this)
        // 2.改成鍵頭函式(無須bind綁定)
        this.setState(
            {
               count: this.state.count + 1
            }
        );
    };
    

    render() {
        const { title } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h1>{this.state.text}</h1>
                <h1>{this.state.count}</h1>                
                <button onClick={this.updateState}>Add Count</button>
            </div>
        );
    }
}

export default Message;