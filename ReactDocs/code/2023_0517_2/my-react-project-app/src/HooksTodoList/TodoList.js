import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import TodoContext, { Provider } from './TodoContext';
import TodoInput from './TodoInput';


const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const TodoList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosCourseData(apiUrl);
    }, []);

    const axiosCourseData = async (apiUrl) => {
        const userData = await axios.get(apiUrl, { timeout: 3000 })
            .then(rs => rs.data)
            .catch(error => {
                console.log("error:", error);
            });

        console.log("rs.userData:", userData);
        setUsers(users => [...users, ...userData]);
    };
    
    const addItem = (newUser) => {
        // 不存在於user清單裡才能加入避免key值重覆
        const filterItem = users.filter(user => user.id == newUser.id);
        if(filterItem.length == 0){
            setUsers(users => [...users, newUser]);
        }
    };

    const removeItem = (userID) => {
        console.log(userID);
        // const newUsers = users.filter(u => u.id !== userID);
        // setUsers(newUsers);
        setUsers(users.filter(u => u.id !== userID));
    };

    const contextValue = { addItem };

    return (
        <div>
            {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
            
            {/* <TodoInput props={{addItem}} /> */}

            <Provider value={contextValue}>
                <TodoInput/>
            </Provider>
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