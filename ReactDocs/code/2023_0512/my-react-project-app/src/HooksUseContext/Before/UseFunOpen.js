import React, { useState } from 'react';
import UseFunOpenButtonDiv from './UseFunOpenButtonDiv';

const UseFunOpen = () => {

    const toggle = () => {
        setState(s => ({
            ...s,
            open: !s.open
        }));
    };

    const [state, setState ] = useState({ open:false, toggle});

    return (
        <div>
            <h3>上層組件</h3>
            <UseFunOpenButtonDiv props={state}/>
            {state.open && <div>Some Content</div>}
        </div>
    )
};

export default UseFunOpen;
