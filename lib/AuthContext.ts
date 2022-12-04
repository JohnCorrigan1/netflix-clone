import { User } from "firebase/auth";
import { createContext } from "react";

// type user = { name: string, isLoggedIn: boolean, id: string} | null
type UserContextObj = {user: User | null | undefined}


export const UserContext = createContext<UserContextObj>({ user: null })