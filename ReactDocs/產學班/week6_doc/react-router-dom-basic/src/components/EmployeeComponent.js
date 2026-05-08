import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import AddEmployeeComponent from './AddEmployeeComponent';

function EmployeeComponent() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEmployees();
    }, []);

    const deleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    };

    const editEmployee = (id) => {
        navigate(`/add-employee/${id}`);
    };

    const addEmployee = () => {
        navigate('/add-employee/_add');
    };

    return (
        <div className='container'>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}>
                    Add Employee
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.emailId}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">
                                        Update
                                    </button>
                                    <button style={{ marginLeft: '10px' }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                    <button style={{ marginLeft: '10px' }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function App2() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeComponent />} />
                <Route path="/add-employee/_add" element={<AddEmployeeComponent />} />
            </Routes>
        </Router>
    );
}

export default App2;
