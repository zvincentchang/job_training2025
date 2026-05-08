import React, { useState, useEffect } from 'react'
import TodoInput from './TodoInput';
import { Provider } from './context';
import axios from "axios";

const TodoList = () => {

    const [users, setUsers] = useState([]);

    const apiUrl  = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    useEffect(
        () => {
            // fetchCourseData(apiUrl);
            axiosCourseData(apiUrl);
        },[]
    );
    
    // fetch 是原生 API 能直接使用
    // 1.基於 Promise 實現
    // 2.對 4xx、5xx 都當做成功的請求，需要封裝去處理必須拋出(throw Error)錯誤
    // 3.不支援 timeout
    // 4.不自動轉換 JSON 資料格式
    const fetchCourseData = async (apiUrl) => {
        // fetch所回傳的直接是資料結果
        const userDatas = await fetch(apiUrl)
        .then(rs => {
            console.log("rs.ok:", rs.ok);
            console.log("rs.status:", rs.status);
            // 只要rs.ok不等於true則須另外拋出Error,才能被cache進行後續其它處理
            if (!rs.ok || rs.status !== 200) {
                throw Error("http status:" + rs.status);
            }
            return rs.json();
        })
        // .then((userDatas) => {
        //     setUsers(users => [...users, ...userDatas]);
        // })
        .catch(error => {
            console.log(error);
        });

        setUsers(users => [...users, ...userDatas]);
    };

    // axios 非原生 API 不能直接使用(須另外import)
    // 1.基於 Promise 實現
    // 2.自動 cache error 不須額外處理
    // 3.支援 timeout
    // 4.自動轉換 JSON 資料格式
    const axiosCourseData = async (apiUrl) => {
        // 從 rs 裡解構 headers, status, data
        const { headers, status, data } = await axios.get(apiUrl, {timeout: 3000})
        .then(rs => rs)
        .catch(error => {
            console.log(error);
        });

        console.log("rs.headers:", headers);
        console.log("rs.status:", status);
        console.log("rs.data:", data);

        setUsers(users => [...users, ...data]);
    }; 

    const addItem = newUser => {
        // 不存在於user清單裡才能加入避免key值重覆
        const filterItem = users.filter(user => user.id == newUser.id);
        if(filterItem.length == 0){
            setUsers(users => [...users, newUser]);
        }
    };

    const removeItem = id => {
        // 過濾掉要刪除的user項目
        setUsers(users.filter(user => user.id !== id));
    };

    const contextValue = { addItem }; // contextValue必須包成物件

    return (
        <div>
            <Provider value={contextValue}>
                {/* <TodoInput addItem = {addItem}/> */}
                <TodoInput/>
            </Provider>            
            <ul>            
                {users.map(user => 
                    <li  style={ {marginTop:'5px'} } key={user.id} >
                        {user.id}.{user.email}
                        &nbsp;&nbsp;    
                        <button onClick={() => removeItem(user.id)}>-</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList;
