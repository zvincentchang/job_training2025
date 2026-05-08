import React from "react";
import UserContext from "./MyUserContext";

function UserProfile() {
    return (
        <UserContext.Consumer>
            {(username) => (
                <div>
                    <h1>User Profile</h1>
                    <p>Username: {username}</p>
                </div>
            )}
        </UserContext.Consumer>
    );
}
export default UserProfile;
