import React, { Component } from 'react';

class InputRefString extends Component {

    showInputText = () => {
        // 'refs' is deprecated. refs字串寫法已被棄用!
        this.refs.myInput.focus();
        console.log("this.refs.myInput.value:", this.refs.myInput.value);
    };

    render() {
        return (
            <div>
                <h3>Input ref 指定字串</h3>
                <input type="text" ref="myInput"/>
                <button onClick={this.showInputText}>show input text</button>
            </div>
        );
    }
}

export default InputRefString;