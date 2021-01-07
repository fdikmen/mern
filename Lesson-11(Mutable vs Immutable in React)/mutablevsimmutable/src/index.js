import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

const intialState=
{
  count:1,
  users:[]
}
/*
const reducer = (state=intialState, action) => {
  switch (action.type) {
    case "ADD":
      state.count += action.payload;
      break;
    case "SUBTRACT":
      state.count -= action.payload;
      break;
    // default:
    //   return state;
  }
   return state;
};*/
const reducer = (state=intialState, action) => {
  switch (action.type) {
    /*case "ADD":
     return  {
      ...state,
      count:state.count + action.payload
    };*/
    case "ADD":
      return Object.assign({}, state, { count: state.count + action.payload });
    case "SUBTRACT":
      return{
        ...state,/*Step:1->count:1,users:[],*/
        count:state.count - action.payload
      };
     default:
       return state;
  }
  //  return state;
};

// const colMiddle=applyMiddleware(thunk,logger);
const store = createStore(reducer,applyMiddleware(logger));

store.subscribe(() => {
  console.log("Store Updated! ", store.getState());
});

store.dispatch({ type: "ADD", payload: 1 });
store.dispatch({ type: "ADD", payload: 10 });
store.dispatch({ type: "SUBTRACT", payload: 5 });

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
