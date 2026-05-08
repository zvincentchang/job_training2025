import React from 'react';
function UserCard({ name, email, phone }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}
export default UserCard;
