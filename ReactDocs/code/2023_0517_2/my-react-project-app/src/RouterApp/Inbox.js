import React from 'react';
import { useParams, useLocation } from "react-router-dom";


const Inbox = () => {

    const params = useParams();
    const location = useLocation();
    const inboxInfo = location.state;

    return (
        <div>
            <h2>Inbox</h2>
            <h3>params.userID : {params.userID}</h3>
            <h3>useLocation:{inboxInfo !== null && inboxInfo.id}</h3>
            <h3>useLocation:{inboxInfo !== null && inboxInfo.text}</h3>
        </div>
    );
};

export default Inbox;
