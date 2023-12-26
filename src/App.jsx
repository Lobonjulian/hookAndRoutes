import { useState } from "react";
import "./App.css";
import { UseFetch } from "./hooks/useFetch";

const App = () => {
  const [contador, setContador] = useState(0);

  const { data, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incremento {contador}
      </button>
      <ul className="card">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
