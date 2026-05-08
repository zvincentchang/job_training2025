import React, { Component } from 'react';
import ChildTwo from './ChildTwo';

class ParentTwo extends Component {

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
                
                {/* <ChildTwo 
                    childCount={this.state.childCount} 
                    addParentCount={this.addParentCount}
                    addChildCount={this.addChildCount}   
                /> */}

                <ChildTwo parentInfo={parentInfo}/>
                

            </div>
        );
    }
}

export default ParentTwo;