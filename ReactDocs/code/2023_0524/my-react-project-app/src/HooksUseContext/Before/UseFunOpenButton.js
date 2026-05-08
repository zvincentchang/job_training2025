import React from 'react';

const UseFunOpenButton = ( {props} ) => {
    const { open, toggle } = props;

    return (
        <div>
            <h3>下層組件</h3>
            <button onClick={toggle}>
                { open ? '關起來' : '打開'  }
            </button>
        </div>
    )
};

export default UseFunOpenButton;
