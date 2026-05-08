import React, { Component } from 'react';

class Child extends Component {

    state = {
        count: 0
    };
    
    addChildCount = () => {
        console.log("Hello Child !");
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h3>Child : {this.state.count}</h3>
                {/* 父傳子:子組件透過 "props" 呼叫父組件函式 this.props.addParentCount */}    
                <button onClick={this.props.addParentCount}>Add Parent Count</button>
                <button onClick={this.addChildCount}>Add Child Count</button>
            </div>
        );
    }
}

export default Child;