import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome to my website!</p>
    </div>
);
const About = () => (
    <div>
        <h2>About</h2>
        <p>Learn more about me and my work.</p>
    </div>
);
const Contact = () => (
    <div>
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
    </div>
);
const Router1 = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
export default Router1;