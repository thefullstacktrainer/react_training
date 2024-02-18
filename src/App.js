import './App.css';
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div>Counter App</div>
      <button onClick={() => setCounter((prevValue) => prevValue - 1)}>-</button>
      <h5>{counter}</h5>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
    </div>
  );
}

export default App;
