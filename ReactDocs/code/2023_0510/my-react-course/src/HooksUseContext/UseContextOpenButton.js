// import React, { Component } from 'react';
// import { Consumer } from './context';

// class UseContextOpenButton extends Component {
//     render() {
//         return (
//             <div>
//                 <Consumer>
//                     {(contextValue) => {
//                         const {open, toggle} = contextValue;
//                         return <button onClick={toggle}>{ open ? 'Close' : 'Open' }</button>
//                     }}
//                 </Consumer>
//             </div>
//         );
//     }
// }

// export default UseContextOpenButton;


import React, { useContext } from 'react';
import context from './context';

const UseContextOpenButton = () => {
    // 使用useContext取代<Context.Consumer>
    const {open, toggle} = useContext(context);
    return (<button onClick={toggle}>{ open ? 'Close' : 'Open' }</button>);
}

export default UseContextOpenButton;