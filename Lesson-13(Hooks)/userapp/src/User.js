import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const User = ({user}) => {
    // console.log("USER=>",user,"---------------------",changeColor);
    const {changeColor}=useContext(UserContext);
    // console.log("USER COMP=>",useContext(UserContext))
    // console.log("change:",change);
    return (
    <div style={{ background: user.color }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      Color:
      <input
        value={user.color}
        onChange={e => changeColor(user.id, e.target.value)}
      />
    </div>
  );
};

export default User;
