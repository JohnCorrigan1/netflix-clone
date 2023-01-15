import { User } from "firebase/auth";
import { createContext } from "react";

type UserContextObj = { user: User | null | undefined };

export const UserContext = createContext<UserContextObj>({ user: null });
