import { useState ,useEffect} from 'react';
import { useNavigate ,useParams } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function AddEmployeeComponent() {
    const navigate = useNavigate();
    const {id} = useParams();   
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id);                
                setEmployee(response.data);               
            } catch (error) {
                console.error(error);
            }
        };
        if(id)
          fetchEmployees();        
    }, [id]);    
    

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
                await EmployeeService.updateEmployee(employee,id).then((response) => {
                    navigate('/employees')
                }).catch(error => {
                    console.log(error)
                })
    
            }else{    
              await EmployeeService.addEmployee(employee);
            }
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };
    const showTitle=()=>{
       if(!id)
          return <h2 className="text-center">Add Employee</h2>
       else
          return <h2 className="text-center">Edit Employee</h2>
    };
    return (              
        <div> 
            {showTitle()}              
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
