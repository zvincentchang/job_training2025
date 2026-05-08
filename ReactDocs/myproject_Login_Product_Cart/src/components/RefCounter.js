import React, { useState, useRef } from 'react';

function RefCounter() {
    const countRef = useRef(0);  // 變數異動畫面不渲染
    const [inputValue, setInputValue] = useState('');
    const handleClick = () => {
        // 變數異動畫面不渲染
        countRef.current = countRef.current + 1;
        alert(countRef.current)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input value:', inputValue);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Input:</label>
                <input
                    type="text"
                    id="input"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <p>Count: {countRef.current}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default RefCounter;
