
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route exact path="/employees" element={<ListEmployeeComponent />} />
            <Route exact path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route exact path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path="*" element={<ListEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
