import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
function Main() {
  return (
    <Router>
      <div>
        <h2>React Router Tutorial for Beginners</h2>
        <nav>
          <ul>
            <li><Link to={'/'} > Home </Link></li>
            <li><Link to={'/contact'} >Contact</Link></li>
            <li><Link to={'/about'} >About</Link></li>
            <li><Link to={'/services'} >Services</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;