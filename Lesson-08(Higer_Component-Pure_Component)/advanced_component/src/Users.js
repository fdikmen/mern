import React, { Component } from "react";
import LoaderHoc from "./LoaderHoc";

class Users extends Component {
  render() {
    // console.log(this.props);    
    // console.log("Users Component Rendering...");
    return (
      <div className="userList">
        
        <b>USERS Data From Wep API</b> <i>(https://jsonplaceholder.typicode.com/users)</i>
        {
        this.props.users.map((user) => <div key={user.id}>{user.name}</div>)
        }
      </div>
    );
  }
}

export default LoaderHoc(Users,"users");
