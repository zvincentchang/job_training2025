import React, { useRef } from 'react';
import UseRefChild from './UseRefChild';

const UseRefParent = () => {

    const parentRef = useRef();

    return (
        <div>
            <button onClick={() => parentRef.current.toggle()} >
                ChildToggle
            </button>
            <br /><br />
            <button onClick={() => parentRef.current.addCount()} >
                ChildAddCount
            </button>
            <UseRefChild ref={parentRef} parentAttr={{ initCount: 6 }} />
        </div>

    );
};

export default UseRefParent;
