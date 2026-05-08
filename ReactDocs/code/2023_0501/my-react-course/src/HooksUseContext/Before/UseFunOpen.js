import React, { useState } from 'react';
import UseFunOpenButtonDiv from './UseFunOpenButtonDiv';

const UseFunOpen = () => {

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
            {/* 
                1.將整個父組件的state傳入子組件props
                2.一般傳入子組件的屬性名稱不會命名為props
            */}
            <UseFunOpenButtonDiv props={state}/>
            { state.open && <div>Some Content</div> }
        </div>
    );

}

export default UseFunOpen;