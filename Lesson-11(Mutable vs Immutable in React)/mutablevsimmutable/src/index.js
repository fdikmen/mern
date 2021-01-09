import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import reduxPromiseMiddleware from 'redux-promise-middleware';

/*const intialState=
{
  count:1,
  users:[]
}*/

const intialState={
  fetching:false,
  fetched:false,
  users:[],
  error:null
}
/*DEFAULT REDUCER -> WITH IMMUTABLE STATE
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
/*NEW REDUCER -> WITH MUTABLE STATE */
// const reducer = (state=intialState, action) => {
//   switch (action.type) {
//     /*case "ADD":
//      return  {
//       ...state,
//       count:state.count + action.payload
//     };*/
//     case "ADD":
//       return Object.assign({}, state, { count: state.count + action.payload });
//     case "SUBTRACT":
//       return{
//         ...state,/*Step:1->count:1,users:[],*/
//         count:state.count - action.payload
//       };
//      default:
//        return state;
//   }
//   //  return state;
// };
/*WITHOUT PROMISE MIDDLEWARE
const reducer=(state=intialState,action)=>{
  switch (action.type) {
   case "FETCH_USERS_START":
     return {
       ...state,
       fetching:true
     };
     case "FETCH_USERS_ERROR":
       return {
         ...state,
         fetching:false,
         error:action.payload
       };
       case "RECEIVE_USERS":
         return {
           ...state,
           fetching:false,
           fetched:true,
           users:action.payload
         };
         default:
           return state;
  }
}*/
/*WITH PROMISE MIDDLEWARE */
const reducer=(state=intialState,action)=>{
  switch (action.type) {
   case "USERS_PENDING":
     return {
       ...state,
       fetching:true
     };
     case "USERS_REJECTED":
       return {
         ...state,
         fetching:false,
         error:action.payload
       };
       case "USERS_FULFILLED":
         return {
           ...state,
           fetching:false,
           fetched:true,
           users:action.payload
         };
         default:
           return state;
  }
}

const multiMiddeware=applyMiddleware(thunk,reduxPromiseMiddleware,logger);
const store = createStore(reducer,multiMiddeware);

store.subscribe(() => {
  // console.log("Store Updated! ", store.getState());
});

/*MANUEL DISPATCH
store.dispatch(dispatch =>{
  dispatch({ type: "FETCH_USERS_START" });
  axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(response=>response.data)
  // .then(response=>console.log(response))
  .then(response=>dispatch({
    type:'RECEIVE_USERS',
    payload:response
  }))
  .catch(error=>dispatch({type:"FETCH_USERS_ERROR",payload:error}))
}  );*/

/*DISPATCH WITH PROMISE MIDDLEWARE */
store.dispatch({
  type:"USERS",
  payload:axios.get('https://jsonplaceholder.typicode.com/users/').then(res=>res.data)
})
//store.dispatch({ type: "ADD", payload: 1 });
// store.dispatch({ type: "ADD", payload: 10 });
// store.dispatch({ type: "SUBTRACT", payload: 5 });

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
