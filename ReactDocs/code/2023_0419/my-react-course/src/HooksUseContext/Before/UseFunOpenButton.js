import React from 'react';

const UseFunOpenButton = ({props}) => {
    const {open, toggle} = props;
    return (<button onClick={toggle}>{ open ? 'Close' : 'Open' }</button>);
}

export default UseFunOpenButton;