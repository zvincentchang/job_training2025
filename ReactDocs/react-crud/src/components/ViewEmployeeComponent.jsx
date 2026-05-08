import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ViewEmployeeComponent() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data);
        });
    }, [id]);

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        Employee First Name:
                        {employee.firstName}
                    </div>
                    <div className="row">
                        Employee Last Name:
                        {employee.lastName}
                    </div>
                    <div className="row">
                        Employee Email ID:
                        {employee.emailId}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;
