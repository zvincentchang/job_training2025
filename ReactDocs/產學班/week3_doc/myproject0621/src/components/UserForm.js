import React, { useState } from 'react';
function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label><br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label><br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default UserForm;