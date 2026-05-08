import React from 'react'
export const FuncEmployee2 = props => {
    const { firstName, lastName, emailId } = props;
    return (
        <div>
            <h1> Employee Details</h1>
            <h2> First Name : {firstName} </h2>
            <h2> Last Name : {lastName} </h2>
            <h2> Eamil Id : {emailId} </h2>
        </div>
    )
}