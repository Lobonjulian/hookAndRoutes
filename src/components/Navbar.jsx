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
        {user && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button onClick={() => setUser(null)}>Cerrar Sesion</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
