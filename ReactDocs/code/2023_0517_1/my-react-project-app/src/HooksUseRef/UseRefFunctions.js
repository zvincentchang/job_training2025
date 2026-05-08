import React, { useState, useRef, Fragment } from 'react';


const UseRefFunctions = () => {

    const [countObj, setState] = useState({ count1: 0, count2: 0 });

    const ref = useRef();

    ref.operateCount = {
        addCount: () => {
            setState(countObj => ({
                ...countObj,
                count1: count1 + 1
            }));
        },
        reduceCount: () => {
            setState(countObj => ({
                ...countObj,
                count2: count2 - 1
            }));
        }
    };

    const { count1, count2 } = countObj;

    return (
        <Fragment>
            <h1>{count1}</h1>
            <button onClick={ref.operateCount.addCount}>
                addCount
            </button>
            <h1>{count2}</h1>
            <button onClick={ref.operateCount.reduceCount}>
                reduceCount
            </button>
        </Fragment>
    );

};

export default UseRefFunctions;
