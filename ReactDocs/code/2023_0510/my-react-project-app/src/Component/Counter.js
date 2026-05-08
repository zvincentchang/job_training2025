import React, { Component } from 'react';

class Counter extends Component {

    state = {
        step: 1,
        count: 0
    };

    counterAdd = () => {
        const { step, count } = this.state;
        this.setState({
            step: step + 1,
            count: count + step
        });
    };

    render() {
        const { step, count } = this.state;
        return (
            <div>
                <h1>Step: {step}</h1>
                <h1>Counter: {count}</h1>
                <button onClick={this.counterAdd}>Counter Add Step + {step} </button>
            </div>
        );
    }
}

export default Counter;