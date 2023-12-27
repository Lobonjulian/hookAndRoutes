import { useUserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  return <>{user ? <Outlet /> : <Navigate to="/" />} </>;
};

//! version larga
// const LayoutPrivate = () => {
//   const { user } = useUserContext();
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!user) {
//       navigate('/')
//     }
//   },[user])

//   return (
//     </Outlet>
//   );
// }

export default LayoutPrivate;
