import { useUserContext } from "../context/UserContext";

const Inicio = () => {
  const { user, setUser } = useUserContext();

  return (
    <>
      <div className="container flex flex-col items-center justify-center">
        <h1 className="font-semibold ">pagina principal</h1>
        {!user && (
          <button onClick={() => setUser({ name: "Julian" })}>
            Iniciar Sesión
          </button>
        )}
      </div>
    </>
  );
};

export default Inicio;
