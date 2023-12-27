import { useContext, createContext } from "react";

export const UserContext = createContext(false);
export const useUserContext = () => useContext(UserContext);
