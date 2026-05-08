import React, { useState } from 'react';

const UseStateApp2 = () => {

    const [{count1, count2}, setCount] = useState({
        count1: 2,
        count2: 20
    });

    const addCountOne = () => {
        setCount(no => ({ ...no, count1: no.count1 + 1 }) );
    };

    const addCountTwo = () => {
        setCount(no => ({ ...no, count2: no.count2 + 1 }) );
    };

    return (
        <div>
            <h3>{count1}</h3>
            <button onClick={addCountOne}>Add Count One</button>
            <h3>{count2}</h3>
            <button onClick={addCountTwo}>Add Count Two</button>
        </div>
    );
};

export default UseStateApp2;
