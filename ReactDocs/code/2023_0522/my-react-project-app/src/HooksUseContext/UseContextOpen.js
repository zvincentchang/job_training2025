import React, { useState } from 'react';
import Context from './Context';
import UseFunOpenButtonDiv from './UseFunOpenButtonDiv'

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
                <h3>上層組件</h3>
                <UseFunOpenButtonDiv/>
                { state.open && <div>Some Content</div> }
            </Context.Provider>
        </div>
    );
};

export default UseContextOpen;
