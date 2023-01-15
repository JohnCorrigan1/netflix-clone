import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import MovieModal from "../components/MovieModal";
import { useContext, useEffect } from "react";
import { CurrentContext } from "../lib/CurrentContext";
import { MovieContext } from "../lib/MovieContext";
import MovieRow from "../components/MovieRow";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

const Home: NextPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const currentContext = useContext(CurrentContext);
  const moviesContext = useContext(MovieContext);

  const handleRouteChange = (url: string) => {
    if (url === "/" && !user) {
      router.push("/signin");
    }
  };

  useEffect(() => {
    handleRouteChange(router.pathname);
  }, [user]);

  return (
    <div className="bg-zinc-900 mb-10 home overflow-hidden scroll smooth">
      <Head>
        <title>Notflix</title>
        <meta name="Fake Netflix" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="">
        <Feature />
      </div>
      <MovieModal open={currentContext.isOpen} movie={currentContext.movie} />
      <div className="mb-10 mt-10">
        <MovieRow
          movies={moviesContext.movies}
          query="https://api.themoviedb.org/3/trending/all/week?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
        />
      </div>
      <div className="mb-10 mt-10">
        <MovieRow
          movies={moviesContext.movies}
          query="https://api.themoviedb.org/3/trending/all/week?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
        />
      </div>
      <div className="mb-10 mt-10">
        <MovieRow
          movies={moviesContext.movies}
          query="https://api.themoviedb.org/3/discover/movie?api_key=f9e8c6b0f08e00ab858099b6fe804ea3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=Comedy&with_watch_monetization_types=flatrate"
        />
      </div>
    </div>
  );
};

export default Home;
