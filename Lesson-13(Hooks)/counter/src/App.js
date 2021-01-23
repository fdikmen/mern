import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import React, { useState } from "react";

function App() {
  const [showClassComp, setShowClassComp] = useState(true);
  const [showFuncComp, setShowFuncComp] = useState(true);

  const compStyle = { width: "50%", float: "left", height: "100vh" };
  const bgCompLeft = { backgroundColor: "#e8cebf" };
  return (
    <div className="App">
      <button onClick={() => setShowClassComp(!showClassComp)}>
        Toggle Class Comp.
      </button>
      <button onClick={() => setShowFuncComp(!showFuncComp)}>
        Toggle Func Comp.
      </button>
      <hr />
      {showClassComp ? (
        <div style={{ ...compStyle, ...bgCompLeft }}>
          <ClassComponent />
        </div>
      ) : null}

      {showFuncComp ? (
        <div style={compStyle}>
          <FunctionalComponent />
        </div>
      ) : null}
    </div>
  );
}

export default App;
