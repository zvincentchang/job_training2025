// import React, { Component } from 'react';
// import { Provider } from './context';
// import UseContextOpenButtonDiv from './UseContextOpenButtonDiv';

// class UseContextOpen extends Component {

//     state = {
//         open: false
//     };

//     toggle = () => {
//         this.setState({
//             open: !this.state.open
//         });
//     };

//     render() {
//         const { open } = this.state;
//         const contextValue = {
//             open,
//             toggle: this.toggle
//         };
//         return (
//             <Provider value={contextValue}>
//                 <UseContextOpenButtonDiv/>
//                 { open && <div>Some Content</div> }
//             </Provider>
//         );
//     }
// }

// export default UseContextOpen;


import React, { useState } from 'react';
import Context, { Provider } from './context';
import UseContextOpenButtonDiv from './UseContextOpenButtonDiv';

const UseContextOpen = () => {

    const toggle = () => {
        setState(
            (s) => ({
                ...s,
                open: !s.open
            })
        );
    };

    const [state, setState] = useState( {open: false, toggle} );

    return (
        <div>
            <Context.Provider value={state}>
                <UseContextOpenButtonDiv/>
                { state.open && <div>Some Content</div> }
            </Context.Provider>
            <hr/>
            <Provider value={state}>            
                <UseContextOpenButtonDiv/>
                { state.open && <div>Some Content</div> }
            </Provider>
        </div>
    );

}

export default UseContextOpen;