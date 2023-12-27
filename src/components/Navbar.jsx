import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="container">
        <Link to="/">Inicio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
