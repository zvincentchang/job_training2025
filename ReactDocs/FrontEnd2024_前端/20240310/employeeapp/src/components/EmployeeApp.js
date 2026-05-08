import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './EmployeeComponent';
import AddEmployeeComponent from './AddEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployee';

function EmployeeApp() {
    return (
       
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeComponent />} />
                <Route path = "/add-employee/:id" element = { <AddEmployeeComponent />} />
                <Route path="/add-employee/_add" element={<AddEmployeeComponent />} />
                <Route path = "/view-employee/:id" element = { <ViewEmployeeComponent />} />
            </Routes>
        </Router>
      
    );
}

export default EmployeeApp;
