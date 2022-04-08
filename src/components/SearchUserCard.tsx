import React from "react";

export const SearchUserCard: React.FC<any> = ({ user }) => {
  return (
    <div className="result-user-card">
      <p>Full Name : {user.fullName}</p>
      <p>Email : {user.email}</p>
      <p>User Name : {user.userName}</p>
    </div>
  );
};
