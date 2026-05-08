import React from "react";
import UserContext from "./MyUserContext";
import UserProfile from "./UserProfile2";
import UpdateUsername from "./UpdateUsername";

function UserApp() {

    return (
        <UserContext.Provider value="John Doe">
            <UserProfile />
            <UpdateUsername />
        </UserContext.Provider>
    );
}

export default UserApp;

