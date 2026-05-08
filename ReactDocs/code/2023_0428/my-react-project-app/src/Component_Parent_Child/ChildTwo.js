import React, { Component } from 'react';

class ChildTwo extends Component {
    render() {

        const {childCount, addParentCount, addChildCount} = this.props.parentInfo;

        return (
            <div>
               <h2>{childCount}</h2>
               <h2>{this.props.parentInfo.childCount}</h2>
               <button onClick={addParentCount}>Add Parent Count</button>
               <button onClick={addChildCount}>Add Child Count</button>
            </div>
        );
    }
}

export default ChildTwo;