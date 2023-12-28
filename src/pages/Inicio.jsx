import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer";

const Inicio = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser({ name: "Julian" });
    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-5">
        <h1 className="font-semibold text-3xl">Pagina Principal</h1>
        {!user && (
          <button
            className="border border-sky-400 px-4 py-2 rounded hover:bg-sky-400 hover:text-white"
            onClick={handleClickLogin}
          >
            Iniciar Sesión
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
