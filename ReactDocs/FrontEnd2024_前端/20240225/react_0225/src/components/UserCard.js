import React from 'react';
function UserCard({ name, email, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

function ShowCard() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  };
  
  return (
    <div>
      <UserCard {...user} />
    </div>
  );
}

export default ShowCard;