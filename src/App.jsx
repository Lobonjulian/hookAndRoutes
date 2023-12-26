import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw Error("No se pudo realizar la petición");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };
    fetchData();
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
};

export default App;
