import React, { useState } from "react";
import "../styles/App.css";

let timer = undefined;

const App = () => {
  const [displayText, setDisplayText] = useState("");
  const [prevent, setPrevent] = useState(false);

  const handlSingleClick = (event) => {
    timer = setTimeout(() => {
      if (!prevent) {
        console.log("I was not double clicked");
      }
    }, 200);
  };

  const handleDoubleClick = (event) => {
    clearTimeout(timer);
    setPrevent(true);

    console.log("I was double clicked");
    setTimeout(() => {
      setPrevent(false);
    }, 200);
  };
  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onDoubleClick={handleDoubleClick}
        onClick={handlSingleClick}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
