import React, { Component, createRef } from 'react';

class InputRefCreateRef extends Component {

    // setRef = (input) => {
    //     this.myInput = input;
    // }
    
    myInput = createRef();

    showInputText = () => {
        this.myInput.current.focus();
        console.log(this.myInput.current.value);
    }

    render() {
        return (
            <div>
               <input type='text' ref={this.myInput} />
               <button onClick={this.showInputText}>show input text : InputRefCreateRef</button>
            </div>
        );
    }
}

export default InputRefCreateRef;