import React from "react";

function UserCard({ user }) {
  console.log(user.name, "Rendered");

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>City: {user.address.city}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

export default React.memo(UserCard);
