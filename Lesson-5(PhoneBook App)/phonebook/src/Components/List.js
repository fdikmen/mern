import React, { Component } from "react";
import "../Styles/List.css";
import PropsTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropsTypes.array.isRequired,
  };
  
  state={filterText:''};
  filterListFunc =(e)=>
  {
    console.log("Run Filter...");
    this.setState({filterText:e.target.value});
    console.log(this.state.filterText);
  }

  render() {

const filteredDatas = this.props.contacts.filter((item) => {
  return (
    item.text.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
  );
});
console.log(this.props.contacts,"<=props --------------");
console.log(filteredDatas,"<=filteredData******************");

    return (
      <div className="listField">
        <input    onChange={this.filterListFunc}      name={"filter"}          id={"filter"}          placeholder={"Filter by name or phone ..."}
        ></input>
        
        <ul>
          {filteredDatas.map((item,index) => {
            return(<li key={index+1}>
                <span className={"name"}>{item.text}</span>
                <span className={"phone"}>{item.phone}</span>
              </li>)            
          })}
        </ul>
      </div>
    );
  }
}
