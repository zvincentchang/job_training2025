import React, { Component } from 'react';

class CounterProps1 extends Component {

    // 一般類別欄位也可透過this.props取得上層組件的值
    // state = {
    //     count : this.props.initCount,
    //     step: 1
    // };

    // 1.props 指定初始 state 透過 constructor
    constructor(props){
        super(props);
        this.state = {
            count : props.initCount,
            step: 1
        }
    };

    counterAdd = () => {
        // 解構
        const {count, step} = this.state;

        this.setState({
            count: count + step,
            step: step + 1
        });
    };

    // 點幾次就加多少
    render() {
        // 解構
        const {count, step} = this.state;
        return (
            <div>
                <h1>Step： {step}</h1>
                <h1>Counter： {count}</h1>
                <button onClick={this.counterAdd}>Counter Add Step + {step}</button>
            </div>
        );
    };
};

export default CounterProps1;