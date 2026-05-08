import { useState } from 'react';
export default function FormText() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <form>
                <label>Input Value:
                    <input type="text" value={inputValue}
                        onChange={handleChange} />
                </label>
                <p>Input Value: {inputValue}</p>
            </form>
        </div>
    )
};