import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "lea",
      email: "lea@gamil.com",
    },
    {
      id: 2,
      username: "lulu",
      email: "lulu@gamil.com",
    },
    {
      id: 3,
      username: "summer",
      email: "summer@gamil.com",
    },
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;
