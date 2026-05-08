import React, { Component } from 'react';

class InputRefFunction extends Component {
    
    setRef = (input) => {
        this.myInput = input;
    }
    
    showInputText = () => {
        this.myInput.focus();
        console.log(this.myInput.value);
    }

    render() {
        return (
            <div>
               <input type='text' ref={this.setRef} />
               <button onClick={this.showInputText}>show input text : InputRefFunction</button>
            </div>
        );
    }
}

export default InputRefFunction;