import React, { useState, useRef, useEffect, useContext } from 'react'
import axios from "axios";
import context from './context';

// const TodoInput = ({ addItem }) => {
const TodoInput = () => {

    // const { addItem } = props;

    // addItem來至於父組件(TodoList)
    const { addItem } = useContext(context);

    const [text, setText] = useState('');

    const ref = useRef();

    useEffect(
        () => {
            // 組件掛載時就focus輸入框
            ref.current.focus();
        },[]
    );

    const onChangeText = e => {
        setText(e.target.value);
    };

    const apiUrl  = 'https://jsonplaceholder.typicode.com/comments/';
    const onAddUserSubmit = async e => {
        e.preventDefault(); // 防止預設submit送出跳頁行為
        
        const { data } = await axios.get(apiUrl + text).then(rs => rs);
        console.log("user:", data);
        addItem(data);

        // 也可從表單裡取欄位值
        // const form = e.target;
        // console.log("form.userID:", form.userID.value);

        setText(''); // 清空輸入框
        ref.current.focus();
    };

    return (
        <div>
            <form onSubmit={onAddUserSubmit}>
                <input name='userID' type="text" ref={ref} value={text} onChange={onChangeText} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoInput;
