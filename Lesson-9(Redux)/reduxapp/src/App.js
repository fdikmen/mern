import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickUpdateUser = this.onClickUpdateUser.bind(this); //set bind
  }
  onClickUpdateUser() {
    // this.props.dispatch(updateUser("HollyXYZ")); /*Without mapDispatchToProps */
    this.props.onUpdateUser("HollyXYZ");    /*With mapDispatchToProps */
      
  }

  render() {
    console.log("APP Comp. Props:=>", this.props);
    return (
      <div className="App">
        Comp App.
        <br />
       <h2>{this.props.user}</h2>
        <button onClick={this.onClickUpdateUser}>Change The Name</button>
      </div>
    );
  }
}

// export default App;

/* All State*/
/*const mapStateToProps = (state) => {
  return state;
};*/


/* All State*/
const mapStateToProps = (state,props) => {
  console.log("mapStateToProps:",props);
  return   {
    ...state,
    myCount:props.count + 5
  };
};

const mapDispatchToProps = {
  onUpdateUser: updateUser,
};

const mergeProps=(propsFromState,propFromDispatch,ownProps)=>
{
  console.log("***************WHERE?************");
  console.log("propsFromState:",propsFromState);
  console.log("propFromDispatch:",propFromDispatch);
  console.log("ownProps:",ownProps);
  return {}

}

/* Only Products
const mapStateToProps = (state) => ({
  products:state.products
})*/

export default connect(mapStateToProps,mapDispatchToProps)(App);
// export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App); /*With MergePros
