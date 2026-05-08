import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

function NavAddComponent() {
    const navigate = useNavigate();
    // const greet = () => {
    //     navigate('/add-employee/_add');
    // };
    function nav() {
        navigate('/add-employee/_add');
    }
    return (

        <div className="col">
            <button className="btn btn-primary" onClick={nav}> Add Employee</button>
        </div>

    );
}
function NavViewComponent(props) {
    const navigate = useNavigate();
    const empId = props.empId;
    function navView() {
        navigate('/view-employee/' + empId);
    }
    return (
        <button style={{ marginLeft: "10px" }} onClick={navView} empId={empId} className="btn btn-info">View </button>
    );
}
function NavUpdateComponent(props) {
    const navigate = useNavigate();
    const empId = props.empId;
    function navUpdate() {
        navigate('/add-employee/' + empId);
    }
    return (
        <button style={{ marginLeft: "10px" }} onClick={navUpdate} empId={empId} className="btn btn-info">Update </button>
    );
}

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        //this.addEmployee = this.addEmployee.bind(this);
        //this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);


    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    // viewEmployee(id) {
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(id) {
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    // addEmployee() {
    //     this.props.history.push('/add-employee/_add');
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <NavAddComponent />
                    {/* <div className="col">
                        <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                    </div> */}
                </div>
                <br></br>
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
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td>
                                                <NavUpdateComponent empId={employee.id} />
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                <NavViewComponent empId={employee.id} />
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
