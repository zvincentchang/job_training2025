import React, { Component } from 'react'
class CSEmployee extends Component {
    render() {
        return (
            <div>
                <h1> Employee Details</h1>
                <h2> First Name : {this.props.firstName} </h2>
                <h2> Last Name : {this.props.lastName} </h2>
                <h2> Eamil Id : {this.props.emailId} </h2>
            </div>
        )
    }
}
export default CSEmployee;