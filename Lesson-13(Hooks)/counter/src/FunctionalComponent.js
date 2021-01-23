import React, { useState, useEffect } from "react";
/*Create by RFCE */
function FunctionalComponent() {
  /*CLASS=>state = { counter: 0, isVisable: true }; */
  const [counter, setCounter] = useState(0);
  const [isVisable, setIsVisable] = useState(true);
  const [timer,setTimer]=useState(0);

  useEffect(() => {
    console.log("Func useEffect was run...");
    const myTimer=setInterval(() => {
        setTimer(timer=>timer + 1 );
      }, 1000);
      return ()=>clearInterval(myTimer);
  },[]); /*LIFECYCLE METODS componentDidMount*/

  useEffect(() => {
    console.log("Timer Func:",timer);      
  }) /*LIFECYCLE METODS componentDidUpdate*/

  const increase = () => {
    setCounter(counter + 1);
  };

//   console.log("FuncComp=>", counter);
  return (
    <div>
      <h1>Functional Component</h1>
      <p>CounterNum:{counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default FunctionalComponent;
