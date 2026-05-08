import React, { Component, PureComponent } from 'react';
import ProgressPercent from './ProgressPercent';

/*
PureComponent 也會比對自已的state
shallow compare 淺層比較 (只比較state的第一層)有差異就會重新render
*/
class Progress extends Component {
// class Progress extends PureComponent {

    state = {
        parentsValue: 1,
        childValue: 1,
        info: {
            x: 1
        }
    };

    add = () => {
        const { parentsValue, childValue, info } = this.state;
        info.x += 1;
        console.log("shallow compare info.x:", info.x);

        this.setState({
            // parentsValue: 1,
            parentsValue: parentsValue + 1,
            /*
               1.PureComponent、Component 差異在效能上，當上層元件所傳入下層元件的 props 中的值若"未改變"的話
                當子組件是 PureComponent 時不會重新 render，但 Component、Functional Component 都會重新 render 效率較差
            */
            // childValue: 1,
            childValue: childValue + 1,
            // 2.父組件PureComponent 只有第一層值更新時才會render,第二層之後的值有更新也不會重新render
            // info: {x: this.state.info.x + 1}
            info: info
        });

    }

    render() {
        console.count('Parents PureComponent render!');
        const { parentsValue, childValue, info } = this.state;
        return (
            <div>
                <p>Parents Component</p>
                Level one : { parentsValue }
                <br/>
                Level two : { info.x }
                <hr/>
                <p>Child Component</p>
                <ProgressPercent childValue = {childValue}/>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Progress;