import React, { useState, useMemo } from 'react';
const Child = ({ age, name, children }) => {
    console.log(age, name, children, '11111111');
    function namechange() {
        console.log(age, name, children, '22222222');
        return name + 'change';
    }
    const changedname = useMemo(() => namechange(), [ name ]);
    return (
        <div style={{ border: '1px solid' }}>
            <p>children：{children}</p>
            <p>name：{name}</p>
            <p>changed：{changedname}</p>
            <p>age：{age}</p>
        </div>
    );
};
const MemoHook = () => {
    const [ name, setname ] = useState('baby张');
    const [ age, setage ] = useState(18);
    return (
        <div>
            <button
                onClick={() => {
                    setname('baby张' + new Date().getTime());
                }}
            >
                改名字
            </button>
            <button
                onClick={() => {
                    setage('年龄' + new Date().getTime());
                }}
            >
                改年龄
            </button>
            <p>
                UseMemo {name}：{age}
            </p>
            <Child age={age} name={name}>
                {name}的children
            </Child>
        </div>
    );
};
export default MemoHook;