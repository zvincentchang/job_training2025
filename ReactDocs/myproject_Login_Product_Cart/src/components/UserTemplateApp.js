import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Routes, Route, useParams } from "react-router-dom";
function Home() {
    return <div>Home page</div>;
}

function About() {
    return <div>About page</div>;
}

function Users() {
    return (
        <div>
            <h2>Users</h2>
            <ul>
                <li>
                    <Link to="/users/1">User 1</Link>
                </li>
                <li>
                    <Link to="/users/2">User 2</Link>
                </li>
                <li>
                    <Link to="/users/3">User 3</Link>
                </li>
            </ul>


        </div>
    );
}

function User() {
    const { id } = useParams();
    return <div>User {id}</div>;
}

function UserTemplateApp() {
    return (
        <Router>
            <div className='contrainer'>
                <nav className="navbar-nav navbar-dark bg-transparent">
                    <div>
                        <Link to="/">Home</Link> &nbsp;  &nbsp;
                        <Link to="/about">About</Link>   &nbsp;  &nbsp;
                        <Link to="/users">Users</Link>   &nbsp;  &nbsp;

                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<User />} />

                </Routes>
            </div>
        </Router>
    );
}


export default UserTemplateApp;
