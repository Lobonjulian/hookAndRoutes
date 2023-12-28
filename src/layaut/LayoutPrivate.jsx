import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

//const LayoutPrivate = () => {
//   const { user } = useUserContext();
//   return <>{user ? <Outlet /> : <Navigate to="/" />} </>;
// };

//! version larga
const LayoutPrivate = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <Outlet />;
};

export default LayoutPrivate;
