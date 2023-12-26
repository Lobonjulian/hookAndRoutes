import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import LayoutPage from "./pages/LayoutPage";
import NoEncontrada from "./pages/NoEncontrada";
import Post from "./pages/Post";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<Post />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
      <div className="container">
        <h1>Rutas</h1>
      </div>
    </>
  );
};

export default App;
