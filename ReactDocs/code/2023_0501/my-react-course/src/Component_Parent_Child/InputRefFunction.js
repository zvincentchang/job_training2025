import React, { Component } from 'react';

class InputRefFunction extends Component {

    // function 參數就是input元素
    setRef = (input) => {
        this.myInput = input;
    };

    showInputText = () => {
        this.myInput.focus();
        console.log("refs function:", this.myInput.value);
    };

    render() {
        return (
            <div>
                <h3>Input ref 指定函數</h3>
                <input type="text" ref={this.setRef} />
                <button onClick={this.showInputText}>show input text</button>
            </div>
        );
    }
}

export default InputRefFunction;