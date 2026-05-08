import React, { useState, useRef } from 'react';
const RefHook = () => {
    const [ name, setname ] = useState('baby张');
    const refvalue = useRef(null);
    function addRef() {
        refvalue.current.value = name;
        console.log(refvalue.current.value);
    }
    return (
        <div>
            <input
                defaultValue={name}
                onChange={(e) => {
                    setname(e.target.value);
                }}
            />
            <button onClick={addRef}>给下面插入名字</button>
            <p>给我个UseRef名字：</p>
            <input ref={refvalue} />
        </div>
    );
};
export default RefHook;