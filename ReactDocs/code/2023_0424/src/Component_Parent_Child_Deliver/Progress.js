import React, { Component, PureComponent } from 'react';
import ProgressPercent from './ProgressPercent';

/*
PureComponent 也會比對自已的state
shallow compare 淺層比較 (只比較state的第一層)有差異就會重新render
*/
class Progress extends Component {


    state = {
        parentsValue: 1,
        childValue: 1,
        info: {
            x: 1
        }
    };

    add = () => {

        const { parentsValue, childValue } = this.state;

        this.setState({
            parentsValue: parentsValue + 1,
            // childValue: childValue + 1
        });

    }

    render() {
        console.count('Parents Component render!');
        const { parentsValue, childValue } = this.state;
        return (
            <div>
                <p>Parents Component</p>
                Level one : { parentsValue }
                <hr/>
                <p>Child Component</p>
                <ProgressPercent childValue = {childValue}/>

                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Progress;