import React, { Component } from 'react';

class Message extends Component {
    /*
    Component state 組件狀態
    1.state (組件狀態)
    2.setState (組件狀態更新)
    3.state 狀態支援可部份更新(Partial update)欄位值
    */
    state = {
        title: '我是Title',
        text: '我是Text',
        count: 0
    };

    constructor(props){
        super(props); // 此行不可省略
        // 透過建構式綁定函數傳入this組件bind(this)
        this.updateState = this.updateState.bind(this);
    }

    // updateState = () => {
    //     // 鍵頭函式裡的this就等於這個組件
    //     this.setState (
    //         { 
    //             text: 'Hello React',
    //             count: this.state.count + 1
    //         }
    //     );
    // }

    updateState() {
        // Component event 事件處理
        // 此時的this指的是html元素自身<button>而非React的組件,修改方式以下兩種
        // 1.透過建構式再綁定回組件bind(this)
        // 2.改成鍵頭函式(無須bind綁定)
        this.setState (
            { 
                text: 'Hello React',
                count: this.state.count + 1
            }
        );
    }

    render() {
        return (
            <div>
                <h2>Title: {this.state.title}</h2>
                <h2>Text: {this.state.text}</h2>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.updateState}>update state</button>
            </div>
        );
    }    
}

export default Message;