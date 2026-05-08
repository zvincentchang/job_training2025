import React, { Component } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from './App';
import About from './About';
import Inbox from './Inbox';


class RouterDom extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/">App</Link></li>
                    <li><Link to="/about">About useNavigate</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/inbox/123">Inbox ID</Link></li>
                </ul>
                <hr/>
                <Routes>
                    <Route path='/' element={<App/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/inbox' element={<Inbox/>}>
                        <Route path=':userID' element={<Inbox/>}/>
                    </Route>
                </Routes>

            </BrowserRouter>
        );
    }
};

export default RouterDom;