import React, { useContext } from 'react';
import Context from './Context';

const UseContextOpenButton = () => {

    const{ open, toggle } = useContext(Context);

    return (
        <div>
            <h3>下層組件</h3>
            <button onClick={toggle}>{ open ? 'Close' : 'Open' }</button>
        </div>
    );

};

export default UseContextOpenButton;
