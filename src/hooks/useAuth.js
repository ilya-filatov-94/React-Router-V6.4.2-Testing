import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider/AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}