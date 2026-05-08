import React, { Component, PureComponent } from 'react';

// 1.class Component
class ProgressPercent extends Component {

    state = {};

    render() {
        console.count('Child Component render!');
        const { childValue } = this.props;
        return (
            <div>{childValue}</div>
        );
    }
}


// 2.Functional Component (Statless無狀態)
// 2.1 函數元件沒有 state 可操作故稱為無狀態Statless
// 2.2 若Component裡沒有state也沒有其它函式就可以使用Functional Component來取代
// const ProgressPercent = (props) => {
//     // 函式直接取代 render
//     // render() {
//         console.count('Child Functional Component render!');
//         const { childValue } = props;
//         return (
//             <div>{childValue}</div>
//         );
//     // }
// }


// 3.PureComponent
/*
PureComponent、Component 差異在效能上，當上層元件所傳入下層元件的props中的值若"未改變"的話
PureComponent不會重新 render，但 Component、Functional Component 都會重新 render 效能較差
*/
// class ProgressPercent extends PureComponent {

//     state = {};

//     render() {
//         console.count('Child PureComponent render!');
//         const { childValue } = this.props;
//         return (
//             <div>{childValue}</div>
//         );
//     }
// }

export default ProgressPercent;