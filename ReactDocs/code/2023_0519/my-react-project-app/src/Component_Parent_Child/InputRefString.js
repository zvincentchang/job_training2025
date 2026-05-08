import React, { Component } from 'react';

class InputRefString extends Component {

    showInputText = () => {
        this.refs.myInput.focus();
        console.log(this.refs.myInput.value);
    }

    render() {
        return (
            <div>
               <input type='text' ref="myInput" />
               <button onClick={this.showInputText}>show input text</button>
            </div>
        );
    }
}

export default InputRefString;