import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./context/UserContext";

const UserList = () => {
    // console.log("USERLIST=>",users,"---------------------",changeColor);
    const {users}=useContext(UserContext);
    //const context=useContext(UserContext);==>context.users
    // console.log("UserList=>",useContext(UserContext));
  return (
    <>
      <h2>User List</h2>
      {users.map(user => (
        <User key={user.id} user={user}/>
      ))}
    </>
  );
};

export default UserList;
