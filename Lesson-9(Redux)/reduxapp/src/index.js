import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "deposit") {
    console.log(action);
    return action.payload.value;
  }
  // console.log(action);
  return "State123";
} /*Define reducer func */

const store = createStore(reducer); /*Define store object and set paremeter reducer funck */

console.log(store.getState()); /*View last state value from store */

const action = {
  type: "deposit",
  payload: { value: "10$"},
}; /*Define action */

store.dispatch(action); /*Dispathing action to store */

console.log(store.getState()); /*View last state value from store */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
