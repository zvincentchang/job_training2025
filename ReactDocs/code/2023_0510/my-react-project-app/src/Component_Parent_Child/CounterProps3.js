import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterProps3 extends Component {

    // 類別內
    // static propTypes = {
    //     initCount: PropTypes.number
    // }

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

// 類別外
CounterProps3.propTypes = {
    initCount: PropTypes.number
};
    

export default CounterProps3;