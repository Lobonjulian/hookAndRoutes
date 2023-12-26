import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const About = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <h2>cargando ...</h2>;
  }
  if (error !== "") {
    return <h2>{error}</h2>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1>about</h1>
      <input
        className="m-2 border border-gray-300"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      {data
        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/about/${item.id}`}>
              {item.id} - {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default About;
