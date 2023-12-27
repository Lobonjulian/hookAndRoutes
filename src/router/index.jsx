import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import About from "../pages/About";
import Contacto from "../pages/Contacto";
import NoEncontrada from "../pages/NoEncontrada";
import LayoutPage from "../layaut/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <NoEncontrada />,
    children: [
      { index: true, element: <Inicio /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacto />,
      },
    ],
  },
]);
