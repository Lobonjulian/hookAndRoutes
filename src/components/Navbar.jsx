import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="container">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
