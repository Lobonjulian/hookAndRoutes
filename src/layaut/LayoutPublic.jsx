import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="bg-red-400 border border-red-200 my-5">
            Cargando ...
          </div>
        )}
        <Outlet />
      </main>
      <footer className="container">Footer</footer>
    </div>
  );
};

export default LayoutPublic;
