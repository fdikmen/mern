import React, { Component } from "react";

export default class Child extends Component {
    state = { age: 15 };
  constructor() {
    super();
    console.log("Child Constructor Runned.");
  }

  componentWillMount() {
    console.log("Child ComponentWillMount runned.");
  }

  componentDidMount() {
    console.log("Child ComponentDidMount runned.");
    // setTimeout(() => {
    //     this.setState({age:19})
    // }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Child componentWillReceiveProps runned.");
    console.log("nextProps=>", nextProps);
  }

shouldComponentUpdate(nextProps, nextState) {
    console.log("Child shouldComponentUpdate runned.");
    console.log("nextProps=>", nextProps);
    console.log("nextState=>", nextState);
    return true;
}
componentWillUpdate(nextProps, nextState) {
    console.log("Child componentWillUpdate runned.");
    console.log("nextProps=>", nextProps);
    console.log("nextState=>", nextState);
}
componentDidUpdate(prevProps, prevState) {
    console.log("Child componentDidUpdate runned.");
    console.log("prevProps=>", prevProps);
    console.log("prevState=>", prevState);
}


componentWillUnmount() {
    console.log("Child componentWillUnmount runned.");
}


//   changeProps=()=>
//   {
//     //   this.props.name="Tommy Child";
//       this.setState({age:19});
//   }
  render() {
    console.log("Child Render runned.");
    return (
      <div>
        Child Component
        <h5>{this.props.name}</h5>
        {/* <button name="change" id="change" onClick={this.changeProps}>Change Props Value</button> */}
      </div>
    );
  }
}
