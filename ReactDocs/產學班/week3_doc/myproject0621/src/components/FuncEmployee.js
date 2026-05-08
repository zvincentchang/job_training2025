import React from 'react'
export const FuncEmployee1 = ({ firstName, lastName, emailId }) => {
    return (
        <div>
            <h1> Employee Details</h1>
            <h2> First Name : {firstName} </h2>
            <h2> Last Name : {lastName} </h2>
            <h2> Eamil Id : {emailId} </h2>
        </div>
    )
}