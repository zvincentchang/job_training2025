import React, { Component } from 'react';
import Child from './ChildTwo';

class Parent extends Component {

    state = {
        count: 0,
        childCount: 0
    };

    addParentCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    addChildCount = () => {
        this.setState({
            childCount: this.state.childCount + 1
        });
    };

    // 完全由父組件本身的state儲存至props操作子組件
    // 子組件再透過props解構"取值"、"取函數"
    render() {

        const parentInfo = {
            childCount: this.state.childCount,
            addParentCount: this.addParentCount,
            addChildCount: this.addChildCount
        };

        return (
            <div>
                <h3>Parent : {this.state.count}</h3>
                <button onClick={this.addParentCount}>Add Parent Count</button>
                <button onClick={this.addChildCount}>Add Child Count</button>
                <hr/>
                <Child parentInfo={parentInfo} />
            </div>
        );
    }
}

export default Parent;