import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './EmployeeComponent';
import AddEmployeeComponent from './AddEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';

function EmployeeApp() {
    return (
        <div className='container'>
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeComponent />} />
                <Route path = "/view-employee/:id" element = { <ViewEmployeeComponent />} />
                <Route path="/add-employee/_add" element={<AddEmployeeComponent />} />
                <Route path = "/add-employee/:id" element = { <AddEmployeeComponent />} />
                
            </Routes>
        </Router>
        </div>
    );
}

export default EmployeeApp;
