import { useRouteError } from "react-router-dom";

const NoEncontrada = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>Pagina de ERROR</p>
      <p>{error.statusText || error.message} </p>
    </div>
  );
};

export default NoEncontrada;
