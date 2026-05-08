import React, { useState, useEffect } from 'react';

const UseEffectApp = () => {

    const [state, setState] = useState({
        email: 'java@gmail.com',
        phone: '0978145602',
        picture: 'https://randomuser.me/api/portraits/med/women/88.jpg',
        userVersion: 0
    });

    const { email, phone, picture, userVersion } = state;

    return (
        <div>
            <img src={picture}/>
            <div>{phone}</div>
            <div>{email}</div>
            <br/>
            <div>userVersion:{userVersion}</div>
        </div>
    );
};

export default UseEffectApp;
