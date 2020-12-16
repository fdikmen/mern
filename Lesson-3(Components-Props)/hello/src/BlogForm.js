import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    //this.props.appClick();
    this.clickButton = this.clickButton.bind(this);
    this.changeState = this.changeState.bind(this);

    // this.state = { name: "Tommy123" }; =>DEFINE FIRST STATE METHOD
  }

  state={name:"Holly"}//=>DEFINE SECOND STATE METHOD
  changeState()
  {
      console.log("Worked");
    //   this.state.name="Holly Changed!"; =>ERROR
    this.setState({name:"Holly Changed!"+Math.floor(Math.random()*3)})
  }

  clickButton() {
    //console.log('Button Clicked. Bro!!!');
    this.props.appClick("Paramters from BlogForm Component....");
  }
  render() {
    //console.log(this.props.appClick);
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.clickButton.bind(this)}>Add</button>   FIRST*/}
        {/* { <button onClick={()=> this.clickButton()}>Add</button>   } SECOND*/}
        {<button onClick={this.clickButton}>Add</button>}

        {<button onClick={this.changeState}>Change State</button>}
      </div>
    );
  }
}
