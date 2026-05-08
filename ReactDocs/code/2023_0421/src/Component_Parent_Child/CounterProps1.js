import React, { Component } from 'react';

class CounterProps1 extends Component {

    // state = {
    //     step: 1,
    //     count: this.props.initCount
    // };

    // 1. props 指定初始 state 透過 constructor
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            count: props.initCount
        }
    }

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

export default CounterProps1;