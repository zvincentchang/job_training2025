import React, { Component, useState } from 'react';

// 使用函式組件(functional component) 就不能直接使用 state 必須透過 Hooks useState(狀態管理)
// 使用 Hooks就可以使用函式組件(functional component)來操作state
const UseStateApp = () => {

    // useState傳入初始的狀態(會回傳一個陣列)
    // 陣列中第一個值(count)代表目前的狀態、第二個為更新狀態的函式(setCount)
    const [count, setCount] = useState(0);
    const addCount = () => {
        // 可傳入函式(傳入的參數為舊的state的值)
        setCount(count => count + 1);
    };
    // 函式組件使用return直接回傳結果渲染畫面,取代傳統類別組件render()函式
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={addCount}>Add</button>
        </div>
    );
};

export default UseStateApp;