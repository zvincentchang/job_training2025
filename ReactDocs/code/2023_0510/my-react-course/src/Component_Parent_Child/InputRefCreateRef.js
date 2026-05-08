import React, { Component, createRef } from 'react';

class InputRefCreateRef extends Component {

    // 透過 createRef 建立DOM參照 (官方建議)
    // createRef() 籍由 import createRef 使用
    myInput = createRef();

    showInputText = () => {
        this.myInput.current.focus();
        console.log("this.myInput.current.value:", this.myInput.current.value);
    };

    render() {
        return (
            <div>
                <h3>Input ref createRef</h3>
                <input type="text" ref={this.myInput}/>
                <button onClick={this.showInputText}>show input text</button>
            </div>
        );
    }
}

export default InputRefCreateRef;