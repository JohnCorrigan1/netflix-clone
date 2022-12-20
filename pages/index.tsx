import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import FeatureInfo from "../components/FeatureInfo";
import MovieRow from "../components/MovieRow";
import MovieModal from "../components/MovieModal";
import { useContext } from "react";
import { CurrentContext } from "../lib/CurrentContext";

const Home: NextPage = () => {

  const currentContext = useContext(CurrentContext);

  return (
    <div className="bg-zinc-900 mb-10 home overflow-hidden scroll smooth">
      <Head>
        <title>Notflix</title>
        <meta name="Fake Netflix" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
        <div className="">
          <FeatureInfo />
          <Feature />
        </div>
        <MovieModal open={currentContext.isOpen} movie={currentContext.movie} />
        <div className="mb-20 mt-10">
        <MovieRow />       
        </div>
        <div className="mb-20 mt-10">
        <MovieRow />       
        </div>
        <div className="mb-20 mt-10">
        <MovieRow />       
        </div>
    </div>
  );
};

export default Home;
