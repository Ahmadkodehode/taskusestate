import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>
        The Counter Is<span className="mySpan"> {count}</span>
      </h1>
      <div className="btn">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}> +1 </button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count * 10)}>* 10</button>
      </div>
    </div>
  );
}

export default App;
