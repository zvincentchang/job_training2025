import React, { Component, useState } from 'react';


const UseStateApp2 = () => {
    // state裡存的是一個多欄位的物件
    const [{count1, count2}, setState] = useState( {count1:0, count2:0} );

    const addCountOne = () => {
        // Hooks useState無法達成部份更新,所以必須要先將原先的state物件保留並且傳入...countObj
        // setState( countObj => ({count1:countObj.count1+1}) );
        setState( countObj => ({...countObj, count1:countObj.count1+1}) );
    };
    const addCountTwo = () => {
        setState( countObj => ({...countObj, count2:countObj.count2+1}) );
    };
    return (
        <div>
            <h3>{count1}</h3>
            <button onClick={addCountOne}>Add count1</button>
            <h3>{count2}</h3>            
            <button onClick={addCountTwo}>Add count2</button>
        </div>
    );
};

export default UseStateApp2;