import React, { useState, forwardRef, useImperativeHandle } from 'react';

const UseRefChild = forwardRef(({ parentAttr }, ref) => {

    const [state, setState] = useState({
        open: true,
        count: parentAttr.initCount
    });
    const { open, count } = state;

    const toggle = () => {
        setState(
            (s) => ({ ...s, open: !open })
        );
    };
    const addCount = () => {
        setState(
            (s) => ({ ...s, count: count + 1 })
        );
    };

    useImperativeHandle(ref, () => ({
        toggle, addCount
    }));

    return (
        <div>
            {open && <h3>Some Content： {count} </h3>}
        </div>
    )
});

export default UseRefChild;
