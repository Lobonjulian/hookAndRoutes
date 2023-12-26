import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const About = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <h2>cargando</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1>about</h1>
      {data.map((item) => (
        <h4 key={item.id}>
          <Link to={`/about/${item.id}`}>
            {item.id} - {item.name}
          </Link>
        </h4>
      ))}
    </div>
  );
};

export default About;
