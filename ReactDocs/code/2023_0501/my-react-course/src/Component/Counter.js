import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
        step: 1
    };

    // 每次count加的數值為上一次的step數值
    // Step     Count     
    //  1         0
    //  2         1 (0+1)
    //  3         3 (1+2)
    //  4         6 (3+3)
    //  5         10 (6+4)
    counterAdd = () => {
        // 解構state欄位
        const {count, step} = this.state;

        this.setState({
            count: count + step,
            step: step + 1
        });

    };

    // 點幾次就加多少
    render() {
        // 解構state欄位
        const {count, step} = this.state;
        return (
            <div>                
                <h1>Step： {step}</h1>
                <h1>Counter： {count}</h1>
                <button onClick={this.counterAdd}>Counter Add Step + {step}</button>
            </div>
        );
    };
}

export default Counter;