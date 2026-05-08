import React, { Component, PureComponent } from 'react';

// 1.class Component
// class ProgressPercent extends Component {
// class ProgressPercent extends PureComponent {

//     state = {};

//     render() {
//         console.count('Child Component render!');
//         const { childValue } = this.props;
//         return (
//             <div>{childValue}</div>
//         );
//     }
// }

// 2.Functional Component (Statless無狀態)
// 2.1 函數元件沒有 state 可操作故稱為無狀態Statless
// 2.2 若Component裡沒有state也沒有其它函式就可以使用Functional Component來取代
const ProgressPercent = (props) => {    
    console.count('Child Functional Component render!');
    const { childValue } = props;
    return (
        <div>{childValue}</div>
    );    
}


export default ProgressPercent;