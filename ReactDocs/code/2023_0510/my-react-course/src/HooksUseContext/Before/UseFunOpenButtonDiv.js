import React from 'react';
import UseFunOpenButton from './UseFunOpenButton';

// {props} 接收父組件的物件參數，所以須加上大括弧
const UseFunOpenButtonDiv = ({props}) => {
    return (
        <div>
            <h3>DIV</h3>
            <UseFunOpenButton props={props}/>
        </div>
    );
}

export default UseFunOpenButtonDiv;