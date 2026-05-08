import React, { useContext, useState } from "react";
import UserContext from "./MyUserContext";

function UpdateUsername() {
    const user = useContext(UserContext);
    const [newUsername, setNewUsername] = useState("");
    const [username, setUsername] = useState(user);

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUsername) {
            console.log("Updating username to", newUsername);
            setUsername(newUsername);
            setNewUsername("");
        }
    };

    return (
        <div>
            <h2>Update Username</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newUsername}
                    onChange={handleUsernameChange}
                    placeholder="Enter new username"
                />
                <button type="submit">Update</button>
            </form>
            <p>Current Username: {username}</p>
        </div>
    );
}

export default UpdateUsername;
