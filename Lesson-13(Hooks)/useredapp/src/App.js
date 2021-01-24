import './App.css';
import { useState,useReducer } from "react";
import {reducer} from './reducer'

const initialState = {  data:"", loading:false, error:"" }

function App() {

const [state, dispatch] = useReducer(reducer, initialState);
  /*const [data, setData] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");*/
const {data,loading,error}=state;
console.log({state});
  const fetchDog = () =>{
    dispatch({type:"FETCH_START"});
    /*setLoading(true);
    setError("");
    setData("");*/
    fetch("https://dog.ceo/api/breeds/image/random")
          .then(result=>result.json())
          .then((res)=>{
            /*setData(res.message);setLoading(false);*/
            dispatch({type:"FETCH_SUCCESS",payload:res.message})
          })
        .catch(()=>{
          /*setError("Error fetching Data");setLoading(false);*/
          dispatch({type:"FETCH_ERROR",payload:"Error fetching data..."});
        })
  }


  return (
    <div className="App">
     APP COMPONENT
     <button onClick={fetchDog} disabled={loading}>FETCH DOG</button>
     {data && (<div><img height="200" src={data} alt="Random Image"></img></div>)}
     {error && <p>{error}</p>}
    </div>
  );
}

export default App;
