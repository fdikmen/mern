import React, { Component } from 'react'
/*Created by RCE */
export class ClassComponent extends Component {
  /*constructor() {
        super();
        this.state={counter:0}      
    }*/
  state = { counter: 0, isVisable: true,timer: 0 };

  componentDidMount() {
    console.log("Class componentDidMount was run...");
    this.myTimer=setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Class componentDidUpdate was run...");
    }
    // console.log("Timer :",this.state.timer);
  }
  componentWillUnmount() {
      console.log("componentWillUnmount");
      clearInterval(this.myTimer);
  }
  

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    // console.log("ClassComp=>", this.state.counter);
    return (
      <div>
        <h1>Class Component</h1>
        <p>CounterNum:{this.state.counter}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent
