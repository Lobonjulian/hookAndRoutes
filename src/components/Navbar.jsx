import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  console.log(useUserContext());
  return (
    <nav className="flex justify-center items-center">
      <div className="my-4">
        <NavLink to="/" className="m-2 bg-sky-500 border-none rounded p-1">
          Inicio
        </NavLink>
        <NavLink to="/about" className="m-2 bg-sky-500 border-none rounded p-1">
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="m-2 bg-sky-500 border-none rounded p-1"
        >
          Contacto
        </NavLink>
        {user && (
          <>
            <NavLink to="tareas">Tareas</NavLink>
            <button>Cerrar Sesion</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
