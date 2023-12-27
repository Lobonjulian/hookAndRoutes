import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Inicio = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser({ name: "Julian" });
    navigate("/dashboard");
  };
  return (
    <>
      <div className="container flex flex-col items-center justify-center">
        <h1 className="font-semibold ">pagina principal</h1>
        {!user && <button onClick={handleClickLogin}>Iniciar Sesión</button>}
      </div>
    </>
  );
};

export default Inicio;
