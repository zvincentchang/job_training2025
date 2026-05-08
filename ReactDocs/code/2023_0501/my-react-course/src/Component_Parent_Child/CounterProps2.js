import React, { Component } from 'react';

class CounterProps2 extends Component {

    // 2.props 透過 defaultProps 指定 props
    // 由於上層組件常有可能忘了指定屬性，導致下層組件抓不到props裡面的欄值
    // 可透過 defaultProps 指定初始 props 欄位值
    
    // 類別內
    static defaultProps = {
        initCount: 10
    };

    state = {
        count : this.props.initCount,
        step: 1
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

// 類別外
// 須寫在類別下方，因為需先有類別，透過類別名稱來指定初始值
// CounterProps2.defaultProps = {
//     initCount: 10
// };

export default CounterProps2;