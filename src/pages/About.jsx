import { Link, useLoaderData } from "react-router-dom";

const About = () => {
  const { about } = useLoaderData();

  return (
    <ul className="flex flex-col items-center">
      {about.length > 0 ? (
        about.map((abouts) => (
          <li key={abouts.id}>
            <Link to={`/abouts/${abouts.id}`}>{abouts.title}</Link>
          </li>
        ))
      ) : (
        <li>No Hay Blog</li>
      )}
    </ul>
  );
};
export default About;

export const loadingAbout = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const about = await data.json();
  return { about };
};
