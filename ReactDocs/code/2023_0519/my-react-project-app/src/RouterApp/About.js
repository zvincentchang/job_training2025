import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate(); 
    const clickUseNavigate = () => {

        const inboxInfo = {
            id: 456,
            text: 'HelloText'
        };

        navigate("/inbox", {state: inboxInfo});
        // window.location = "/inbox";
    };

    return (
        <div>
            <h3>About</h3>
            <button onClick={clickUseNavigate}>useNavigate to inbox</button>
        </div>
    );
};

export default About;
