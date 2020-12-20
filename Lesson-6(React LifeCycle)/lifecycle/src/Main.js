import React, { Component } from "react";
import Child from "./Child";

export default class Main extends Component {
  state = { name: "John" }; //State,Props oluşumu constructor(props) çalışmasından öncedir.

  constructor(props) {
    super(props);
    console.log("Main Constructor Runned.");
    this.state = { name: "Tommy" };
    //console.log("PROPS==>",props);
  }

  componentWillMount() {
    console.log("Main ComponentWillMount runned.");
  }

  componentDidMount() {
    console.log("Main ComponentDidMount runned.");

     setTimeout(() => {
        this.setState({name:"TommyXXX"})
     }, 2000);
  }

  render() {
    console.log("Main Render runned.");
    return (
      <div>
        Main Component
        <br />
        {this.state.name}
        <Child name={this.state.name}></Child> 
      </div>
    );
  }
}
