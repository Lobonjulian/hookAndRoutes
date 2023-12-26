import { useState, useEffect } from "react";
import "./App.css";
import { useCallback } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    console.log("iniciando fectchData");
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>useEffect</h1>
      <ul className="card">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
