import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App flex">
      <h1 className="text-3xl font-bold ">
        The Counter Is<span className="mySpan"> {count}</span>
      </h1>
      <div className="btn">
        <button className="text-3xl font-bold " onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount(count + 1)}> +1 </button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count * 10)}>* 10</button>
      </div>
    </div>
  );
}

export default App;
