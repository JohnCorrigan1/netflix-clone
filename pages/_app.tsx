import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../lib/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import CurrentContextProvider from "../lib/CurrentContext";
import { auth } from "./../lib/firebase";
import { Toaster } from "react-hot-toast";
import MovieContextProvider from "../lib/MovieContext";
import LibraryContextProvider from "../lib/FavoritesContext";

function MyApp({ Component, pageProps }: AppProps) {
  
  const [user] = useAuthState(auth);

  return (
    <LibraryContextProvider>
    <CurrentContextProvider>
    <MovieContextProvider>
      <UserContext.Provider value={{ user }}>
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </MovieContextProvider>
    </CurrentContextProvider>
    </LibraryContextProvider>
  );
}

export default MyApp;
