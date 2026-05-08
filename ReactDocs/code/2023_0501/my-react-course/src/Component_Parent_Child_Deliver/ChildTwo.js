import React, { Component } from 'react';

class Child extends Component {

    render() {
        // 解構父層組件 props
        const {childCount, addParentCount, addChildCount} = this.props.parentInfo;

        return (
            <div>
                <h3>Child : {childCount}</h3>
                <button onClick={addParentCount}>Add Parent Count</button>
                <button onClick={addChildCount}>Add Child Count</button>
            </div>
        );
    }
}

export default Child;