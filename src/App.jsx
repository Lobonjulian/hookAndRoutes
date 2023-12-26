import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("se esta renderizando");
  });

  return (
    <>
      <h1>useEffect {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          incremento {count}
        </button>
      </div>
    </>
  );
}

export default App;
