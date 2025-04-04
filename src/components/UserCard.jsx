import React from "react";

export const UserCard = ({user}) => {
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt={`${user.username} avatar`}
        className="user-avatar-card"
      />
      <div className="user-info-card">
        <h3>{user.name}</h3>
        <p>@{user.username}</p>
      </div>
    </div>
  );
};
