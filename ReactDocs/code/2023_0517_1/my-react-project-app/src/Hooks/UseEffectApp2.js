import React, { useState, useEffect } from 'react';

const UseEffectApp2 = () => {

    const [state, setState] = useState({
        email: '',
        phone: '',
        picture: ''
    });

    useEffect(()=>{
        console.log("2.useEffect(附加作用)componentDidMount");

        // 新增監聽
        window.addEventListener('submit', fetchRandomuser);

        // 相當於 componentWillUnmount 清理函式        
        return () => {
            console.log("3. useEffect(附加作用)componentWillUnmount");
            // 移除監聽
            window.removeEventListener('submit', fetchRandomuser);
        };
    },[]);
    
    const fetchRandomuser = (e) => {
        e.preventDefault(); // 避免表單送出預設跳頁行為        
        fetch('https://randomuser.me/api/')
        .then((rs) => rs.json())
        .then((data) => {
            const [user] = data.results;
            setState( (u) => ({
                ...u,
                email: user.email,
                phone: user.phone,
                picture: user.picture.medium
            }) );
        });        
    };


    const { email, phone, picture } = state;

    console.log("1.render 渲染函式");
    return (        
        <div>
            <img src={picture}/>
            <div>{phone}</div>
            <div>{email}</div>
            <br/>            
            <form>
                <button type='submit'>change useEffect value</button>
            </form>
        </div>
    );
};

export default UseEffectApp2;
