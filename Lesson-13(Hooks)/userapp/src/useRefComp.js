import React, { useRef, useState } from "react";

function useRefComp() {
    const [dummy, setDummy] = useState({});
  const inputRef = useRef();
  const divRef = useRef();

  const onSetBorder = () => {
    console.log(inputRef.current);
    inputRef.current.style.border = "1px solid red";
  };

  const onSetBorderDiv = () => {
    console.log(divRef.current);
    divRef.current.style.border = "2px dotted blue";
  };
  const onViewTextInput = () => {      
    setDummy({});
        alert(inputRef.current.value);
        inputRef.current.focus();
        console.log(inputRef.current);
  };
  return (
    <div ref={divRef}>
      <h1>Component For useRef</h1>
      <input ref={inputRef} placeholder="Enter text..."></input>
      <button onClick={onSetBorder}>Set Border To Input</button>
      <button onClick={onSetBorderDiv}>Set Border To Div</button>
      <button onClick={onViewTextInput}>View Input Text</button>
    </div>
  );
}

export default useRefComp;
