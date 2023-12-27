import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div>
      <h1 className="text-center font-bold">
        {post.id} - {post.title}
      </h1>
      <p className="my-4 text-center">{post.body}</p>
    </div>
  );
};

export default Post;

export const loadingPost = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await data.json();

  if (!data.ok)
    throw {
      status: data.status,
      statusText: "Code: " + data.status,
    };

  return { post };
};
