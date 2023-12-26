import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import LayoutPage from "./pages/LayoutPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacto />} />
        </Route>
      </Routes>
      <div className="container">
        <h1>Rutas</h1>
      </div>
    </>
  );
};

export default App;
