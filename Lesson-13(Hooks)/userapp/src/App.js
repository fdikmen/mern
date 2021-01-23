import React, { useState } from "react";
import UserList from "./UserList";
import {UserContext} from './context/UserContext'


const data = [
  { id: 1,  name: "Tommy",   email: "tommy@email.com",  age: 25,  color: "red" },
  { id: 2,  name: "Ela",  email: "ela@email.com", age: 50,  color: "blue"  },
  { id: 3,  name: "Cake",     email: "cake@email.com",    age: 65,  color: "yellow" }
];

const App = () => {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
  setUsers(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    );
// console.log("APP=>",users,"---------------------",changeColor);
  return (
    <UserContext.Provider value={{changeColor,users}}>
      <div className="App">
      <header>
        <h1>Welcome!</h1>
      </header>
      <UserList/>
    </div>
    </UserContext.Provider>
  );
};

export default App;
