import React, { Component, createRef } from 'react';
import Child from './Child';

class Parent extends Component {

    state = {
        count: 0
    };

    addParentCount = () => {
        console.log("Hello Parent !");
        this.setState({
            count: this.state.count + 1
        });
    };

    addChildCount = () => {
        this.childRef.current.addChildCountOne();
    };

    childRef = createRef();

    render() {
        return (
            <div>
                <h3>Parent : {this.state.count}</h3>
                <button onClick={this.addParentCount}>Add Parent Count</button>
                <button onClick={this.addChildCount}>Add Child Count</button>
                {/* <button onClick={() => this.childRef.current.addChildCountOne() }>Add Child Count</button> */}
                <hr/>

                <Child ref={this.childRef} addParentCount={this.addParentCount} />

            </div>
        );
    }
}

export default Parent;