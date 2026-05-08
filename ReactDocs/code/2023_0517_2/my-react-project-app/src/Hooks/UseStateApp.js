import React, { useState } from 'react';

const UseStateApp = () => {

    const [number, setNumber] = useState(7);

    const addCount = () => {
        console.log("addCount");
        setNumber(no => no + 1);
    };

    return (
        <div>
            <h3>{number}</h3>
            <button onClick={addCount}>Add</button>
        </div>
    );
};

export default UseStateApp;
