import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Post = () => {
  let parametro = useParams();

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + parametro.id
  );
  if (loading) {
    return <h2>cargando</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
