import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterProps3 extends Component {

    // 3.props 用 propTypes 檢查 props 型別
    // Warning: Failed prop type: Invalid prop `initCount` of type `string` supplied to `CounterProps3`, expected `number`.

    // 類別內
    static propTypes = {
        initCount: PropTypes.number
    }

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
// CounterProps3.propTypes = {
//     initCount: PropTypes.number
// };

export default CounterProps3;