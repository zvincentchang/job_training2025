import React, { useState, useEffect } from 'react';

// 使用函式組件(functional component) 就不能使用生命週期函式
const UseEffectApp2  = () => {

    // useState傳入初始的狀態(會回傳一個陣列)
    // 陣列中第一個值(state)代表目前的狀態、第二個為設定狀態的函式(setState)
    const [ state, setState ] = useState({
        email: '',
        phone: '',
        picture: ''
    });   

    const { email, phone, picture} = state;

    /*
        useEffect(附加作用)
        1.第一個參數「函式」相當於 componentDidMount
        於組件每次render更新時執行第一個參數「函式」

        2.第二個參數「陣列」相當於 componentDidUpdate
        用來判斷與前一次呼叫useEffect傳入的第二參數值是否一樣
        如果不一樣則會再次呼叫第一個參數的函式
        PS:若傳入空陣列則useEffect只會執行一次
    */
    useEffect(() => {
        console.log("2.useEffect(附加作用)componentDidMount");
        // 新增監聽        
        window.addEventListener('submit', fetchRandomuser);

        // 相當於 componentWillUnmount 清理函式
        return () => {
            console.log("3.useEffect(附加作用)componentWillUnmount");
            // 移除監聽
            window.removeEventListener('submit', fetchRandomuser);
        };
    }, [ ]);

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
}

export default UseEffectApp2;