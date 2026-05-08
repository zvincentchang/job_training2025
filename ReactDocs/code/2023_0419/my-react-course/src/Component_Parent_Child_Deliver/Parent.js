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

    childRef = createRef();

    addChildCount = () => {
        // 子傳父:父組件使用 "ref",透過createRef()建立對子組件的參照,再透過參照來呼叫子組件函式addChildCount()
        this.childRef.current.addChildCount();
    };    

    render() {
        return (
            <div>
                <h3>Parent : {this.state.count}</h3>
                <button onClick={this.addParentCount}>Add Parent Count</button>
                <button onClick={this.addChildCount}>Add Child Count</button>
                <hr/>
                <Child ref={this.childRef} addParentCount={this.addParentCount}/>
            </div>
        );
    }
}

export default Parent;