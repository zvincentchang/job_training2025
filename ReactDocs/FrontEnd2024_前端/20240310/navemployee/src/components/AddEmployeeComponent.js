import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import { useParams } from 'react-router-dom';

function AddEmployeeComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
        console.log("id:"+id);
        if (id) {
            EmployeeService.getEmployeeById(id).then((response) => {
                setEmployee(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id])
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
            if(id){
                await EmployeeService.updateEmployee(employee,id);
            }else{
              await EmployeeService.createEmployee(employee);
            }
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };
    const displayTitle = () => {
        if (!id) {
            return <h2 className="text-center">Add Employee</h2>
        } else {
            return <h2 className="text-center">Edit Employee</h2>
        }
    }
    return (
        <div>

            {/* <h2 className="text-center">Add Employee</h2> */}
            {displayTitle()}
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
                                name="email"
                                className="form-control"
                                value={employee.email}
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
