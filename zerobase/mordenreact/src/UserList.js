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
      {users.map((user, index) => (
        // key props은 각 원소마다 고유값을 주는 것, 리렌더링 성능 최적화를 시켜줌
        // id가 없을 경우엔 index를 key값에 넣어주는 것이 원칙 (성능적으로 좋아지지 않음)
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
