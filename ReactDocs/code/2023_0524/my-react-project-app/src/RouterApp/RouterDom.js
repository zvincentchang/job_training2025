import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from './App';
import About from './About';
import Inbox from './Inbox';



class RouterDom extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/"><Button variant="outline-success">App</Button></Link></li>
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
                    <Route path='*' element={<p>404</p>}/>
                </Routes>
            </BrowserRouter>
        );
    }
};

export default RouterDom;