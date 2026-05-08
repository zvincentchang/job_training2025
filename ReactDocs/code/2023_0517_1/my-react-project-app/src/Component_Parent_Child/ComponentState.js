import React, { Component } from 'react';

class ComponentState extends Component {

    state = {
        count: 0
    }

    addCount = () =>{

        // this.setState({
        //     count: this.state.count + 1
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });

        // this.setState( state => ({
        //     count: state.count + 1
        // }));

        // this.setState( state => ({
        //     count: state.count + 1
        // }));

        this.setState( state => 
            ({ count: state.count + 1 }),
            () => {
                console.log("--- setStateOne ---");
                this.printCount();
            }
        );

        this.setState( state => 
            ({ count: state.count + 1 }),
            () => {
                console.log("--- setStateTwo ---");
            }
        );

    };

    printCount = () => {
        console.log("PrintCount Count:", this.state.count);
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>Add Count</button>
            </div>
        );
    }
}

export default ComponentState;