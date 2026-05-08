import React, { Component } from 'react'
class CSEmployee2 extends Component {
    render() {
        const { firstName, lastName, emailId } = this.props;
        return (
            <div>
                <h1> Employee Details</h1>
                <h2> First Name : {firstName} </h2>
                <h2> Last Name : {lastName} </h2>
                <h2> Eamil Id : {emailId} </h2>
            </div>
        )
    }
}
export default CSEmployee2;