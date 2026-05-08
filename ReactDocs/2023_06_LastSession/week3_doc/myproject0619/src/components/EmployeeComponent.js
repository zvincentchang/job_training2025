import React, {useState, useEffect} from 'react'

function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])


    const getEmployees = () => {

        setEmployees([
            {
               "id":1,
               "firstName":"Ramesh",
               "lastName":"Fadatare",
               "email":"ramesh@gmail.com"
            },
            {
               "id":2,
               "firstName":"Tony",
               "lastName":"Stark",
               "email":"tony@gmail.com"
            },
            {
               "id":3,
               "firstName":"John",
               "lastName":"Cena",
               "email":"cena@gmail.com"
            }
         ])
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Employees List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee First Name</th>
                        <th> Employee Last</th>
                        <th> Employee Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.firstName }</td>
                                    <td> {employee.lastName }</td>    
                                    <td> {employee.email }</td>

                                </tr>

                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default EmployeeComponent
