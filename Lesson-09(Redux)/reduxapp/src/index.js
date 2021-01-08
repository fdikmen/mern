import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {combineReducers, createStore,applyMiddleware,compose } from "redux";
import {Provider} from "react-redux";
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

function reducer(state, action) {
  if (action.type === "deposit") {
    // console.log(action);
    return action.payload.value;
  }
  else if (action.type === "changeTheState") {
    // console.log(action);
    return action.payload.NewState;
  }
  // console.log(action);
  return "State123";
} /*Define reducer func */

/*Move to userReducer.js
function userReducer(state='',action){
  switch (action.type) {
    case 'userUpdate':
      return action.payload;
    default:
      return state;
  }
}*/
/*Move to productReducer.js
function productReducer(state=[],action){
  return state;
}
*/

const allEnhancers=compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootReducer=combineReducers
(
  {
    user:userReducer,
    products:productReducer
  }
);
// const store = createStore(rootReducer,{user:'Tommy',products:[{name:'Sony',type:'PS5'}]});/*Initial State */

const store = createStore(  rootReducer,
  {user:'Tommy',products:[{name:'Sony',type:'PS5'}]},
  allEnhancers
  );
/*const store = createStore(reducer); /*Define store object and set paremeter reducer funck */

// console.log(store.getState()); /*View last state value from store */
const updateUserAction=
{
  type:'userUpdate',
  payload:{user:'Holly'}
}
const action = {
  type: "deposit",
  payload: { value: "10$"},
}; /*Define action */

const action2 = {
  type: "changeTheState",
  payload: { NewState: "NewStateVal"},
}; /*Define action */

store.subscribe(()=>{
  // console.log('subscribe->Store Updated',store.getState());
});

//store.dispatch(action); /*Dispathing action to store */
store.dispatch(updateUserAction); /*Dispathing action to store */
// store.dispatch(action2);

// console.log(store.getState()); /*View last state value from store */

ReactDOM.render(
  <Provider store={store}>    
    <App count={23}/>
    </Provider>/*set public store with Provider  */
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
