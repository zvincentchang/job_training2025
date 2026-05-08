import React, { useState, useEffect } from 'react';

const UseEffectApp = () => {

    const [state, setState] = useState({
        email: '',
        phone: '',
        picture: '',
        userVersion: 0
    });


    useEffect(() => {
        console.log("2.useEffect(附加作用)componentDidMount:", userVersion);
        fetchUser();

        return () => {
            console.log("3.useEffect(附加作用)componentWillUnmount:", userVersion);
        };
    }
    , [state.userVersion]);

    const fetchUser = () => {
        // fetch API
        fetch('https://randomuser.me/api/')
        .then(rs => rs.json())
        .then(data => {
            const [user] = data.results;
            setState(u => ({
                ...u,
                email: user.email,
                phone: user.phone,
                picture: user.picture.medium
            }));
        });
    };

    const changeUser = () => {
        setState(u => ({
            ...u,
            userVersion: userVersion + 1
        }));
    };

    const { email, phone, picture, userVersion } = state;

    console.log("1.render 渲染函式");
    return (
        <div>
            <img src={picture}/>
            <div>{phone}</div>
            <div>{email}</div>
            <br/>
            <div>userVersion:{userVersion}</div>
            <button onClick={changeUser}>Change User</button>
        </div>
    );
};

export default UseEffectApp;
