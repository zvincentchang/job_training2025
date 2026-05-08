import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function AddEmployeeComponent() {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await EmployeeService.addEmployee(employee);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="text-center">Add Employee</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                className="form-control"
                                value={employee.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                className="form-control"
                                value={employee.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Id:</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="emailId"
                                className="form-control"
                                value={employee.emailId}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
