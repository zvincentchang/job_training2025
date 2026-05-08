import React, { useState, useEffect } from 'react'
import EmployeeService from './EmployeeService'
import { useParams } from 'react-router-dom';

const ViewEmployeeComponent = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });    

    useEffect(() => {        
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },[id])   

    return (
        <div className="container">
            <h2 className="text-center"> List Employee </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                </thead>
                <tbody>                  
                    <tr key={employee.id}>
                        <td> {employee.id} </td>
                        <td> {employee.firstName} </td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>                 
                </tbody>
            </table>
        </div>
    )
}

export default ViewEmployeeComponent
