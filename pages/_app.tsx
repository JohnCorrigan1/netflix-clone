import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../lib/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../lib/firebase";
import { Toaster } from "react-hot-toast";
import MovieContextProvider from "../lib/MovieContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);

  return (
    <MovieContextProvider>
      <UserContext.Provider value={{ user }}>
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </MovieContextProvider>
  );
}

export default MyApp;
