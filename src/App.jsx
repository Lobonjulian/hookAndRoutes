import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("se esta renderizando");
  }, []); //Le pasamos un array vacío como segundo argumento para que se ejectute una sola vez.

  return (
    <>
      <h1>useEffect - Renderizado condicional</h1>
      <div className="card">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </>
  );
}

export default App;
