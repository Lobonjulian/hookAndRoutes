import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import About, { loadingAbout } from "../pages/About";
import Contacto from "../pages/Contacto";
import NoEncontrada from "../pages/NoEncontrada";
import LayoutPage from "../layaut/LayoutPrivate";
import Post, { loadingPost } from "../pages/Post";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <NoEncontrada />,
    children: [
      {
        errorElement: <NoEncontrada />,
        children: [
          { index: true, element: <Inicio /> },
          {
            path: "/about",
            element: <About />,
            loader: loadingAbout,
          },
          {
            path: "/about/:id",
            element: <Post />,
            loader: loadingPost,
          },
          {
            path: "/contact",
            element: <Contacto />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
