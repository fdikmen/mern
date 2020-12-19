import React, { Component } from "react";
import "../Styles/List.css";
import PropsTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropsTypes.array.isRequired,
  };
  render() {
    return (
      <div className="listField">
        <input          name={"filter"}          id={"filter"}          placeholder={"Filter by name or phone ..."}
        ></input>
        <ul>
          {this.props.contacts.map((item,index) => {
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
