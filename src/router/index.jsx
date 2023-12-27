import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import About from "../pages/About";
import Contacto from "../pages/Contacto";
import NoEncontrada from "../pages/NoEncontrada";

export const router = createBrowserRouter([
  { path: "/", element: <Inicio />, errorElement: <NoEncontrada /> },
  { path: "/about", element: <About />, errorElement: <NoEncontrada /> },
  { path: "/", element: <Contacto />, errorElement: <NoEncontrada /> },
]);
