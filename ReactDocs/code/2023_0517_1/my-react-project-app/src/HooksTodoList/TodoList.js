import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";


const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const TodoList = () => {

    const [users, setUsers] = useState([]);

    const [inputText, setInputText] = useState('');

    useEffect(() => {
        // fetchCourseData(apiUrl);
        axiosCourseData(apiUrl);
    }, []);

    const axiosCourseData = async (apiUrl) => {
        // const { headers, status, data } = await axios.get(apiUrl, { timeout: 3000 })
        //     .then(rs => rs)
        //     .catch(error => {
        //         console.log("error:", error);
        //     });

        // console.log("rs.headers:", headers);
        // console.log("rs.status:", status);
        // if(status == 200){
        //     console.log("rs.userData:", data);
        // }

        const userData = await axios.get(apiUrl, { timeout: 3000 })
            .then(rs => rs.data)
            .catch(error => {
                console.log("error:", error);
            });

        console.log("rs.userData:", userData);
        setUsers(users => [...users, ...userData]);
    };


    const fetchCourseData = async (apiUrl) => {
        // fetch所回傳的直接是資料結果
        const userDatas = await fetch(apiUrl)
            // .then(rs => {
            //     console.log("rs.ok:", rs.ok);
            //     console.log("rs.status:", rs.status);
            //     // 只要rs.ok不等於true則須另外拋出Error,才能被cache進行後續其它處理
            //     if (!rs.ok || rs.status !== 200) {
            //         throw Error("http status:" + rs.status);
            //     }
            //     return rs.json();
            // })
            // .then((userDatas) => {
            //     setUsers(users => [...users, ...userDatas]);
            // })
            .then(rs => rs.json())
            .catch(error => {
                console.log(error);
            });

        setUsers(users => [...users, ...userDatas]);
    };

    const apiUrl2  = 'https://jsonplaceholder.typicode.com/comments/';

    const onAddUserSubmit = async (e) => {
        e.preventDefault();  // 防止預設submit送出跳頁行為
        const userData = await axios.get(apiUrl2 + inputText).then(rs => rs.data);
        addItem(userData);
        setInputText('');
        inputRef.current.focus();
    };

    const addItem = (newUser) => {
        // 不存在於user清單裡才能加入避免key值重覆
        const filterItem = users.filter(user => user.id == newUser.id);
        if(filterItem.length == 0){
            setUsers(users => [...users, newUser]);
        }
    };

    const onChangeText = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const removeItem = (userID) => {
        console.log(userID);
        // const newUsers = users.filter(u => u.id !== userID);
        // setUsers(newUsers);
        setUsers(users.filter(u => u.id !== userID));
    };

    const inputRef = useRef();

    return (
        <div>
            {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
            
            <form onSubmit={onAddUserSubmit}>
                <input name='userID' type="text" 
                    ref={inputRef} value={inputText}
                    onChange={onChangeText} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {users.map( user =>
                    <li style={ {marginTop:'15px'} } key={user.id}>
                        {user.id}.{user.email}
                        &nbsp;&nbsp;
                        <button onClick={() => removeItem(user.id)}>-</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TodoList;
