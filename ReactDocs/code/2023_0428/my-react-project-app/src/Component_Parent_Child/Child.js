import React, { Component } from 'react';

class Child extends Component {

    state = {
        count: 0
    };
    
    addChildCountOne = () => {
        console.log("Hello Child !");
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h3>Child : {this.state.count}</h3>
                <button onClick={this.props.addParentCount}>Add Parent Count</button>
                <button onClick={this.addChildCountOne}>Add Child Count</button>
            </div>
        );
    }
}

export default Child;