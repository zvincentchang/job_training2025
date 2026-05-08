import React, { useState, forwardRef, useImperativeHandle } from 'react';

const UseRefChild = forwardRef( ({parentAttr}, ref) => {

    const [state, setState] = useState({
        open: true,
        count: parentAttr.initCount
    });

    const{ open, count } = state;

    const toggle = () => {
        setState(
            (s) => ({ ...s, open: !s.open })
        );
    };

    const addCount = () => {
        setState(
            (s) => ({ ...s, count: s.count+1 })
        );
    };

    // 訂義子組件<UseRefChild>傳给父组件<UseRefParent>的函式
    // useImperativeHandle必須要有forwardRef配合使用
    useImperativeHandle(ref, () => ({
        toggle, addCount
    }));

    return (
        <div>
            { open && <h3>Some Content： {count} </h3> }
        </div>
    )
});

export default UseRefChild;
