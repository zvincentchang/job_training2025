import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from "axios";
import todoContext from './TodoContext';

// const TodoInput = ({props}) => {
//     const { addItem } = props;

const TodoInput = () => {
    
     const { addItem } = useContext(todoContext);

    const [inputText, setInputText] = useState('');

    const apiUrl2  = 'https://jsonplaceholder.typicode.com/comments/';

    const onAddUserSubmit = async (e) => {
        e.preventDefault();  // 防止預設submit送出跳頁行為
        const userData = await axios.get(apiUrl2 + inputText).then(rs => rs.data);
        addItem(userData);
        setInputText('');
        inputRef.current.focus();
    };

    const onChangeText = (e) => {
        setInputText(e.target.value);
    };

    const inputRef = useRef();

    return (
        <div>
            <form onSubmit={onAddUserSubmit}>
                <input name='userID' type="text" 
                    ref={inputRef} value={inputText}
                    onChange={onChangeText} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TodoInput;
