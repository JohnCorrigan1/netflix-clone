import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Featured from "../models/featured";

const Home: NextPage = () => {
  const [mustWatch, setMustWatch] = useState<Featured | null>(null);

  useEffect(() => {
    getTrending();
    getConfig();
  });

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
    );

    const movies = await data.json();
    const featured = movies.results[0];
    console.log(featured);
    setMustWatch(
      new Featured(
        featured.id,
        featured.title,
        featured.mediaType,
        featured.poster_path,
        featured.backdrop_path,
        featured.vote_average,
        featured.overview,
        featured.release_date
      )
    );
    console.log(mustWatch);
  };

  const getConfig = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/configuration?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
    );

    const config = await data.json();
    console.log(config);
  };

  return (
    <div className="">
      <Head>
        <title>Notflix</title>
        <meta name="Fake Netflix" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {mustWatch && (
        <div>
          <h1 className="text-4xl text-main">{mustWatch.title}</h1>
          <Image
            src={mustWatch.backdropPath}
            height={1080}
            width={1920}
            alt={mustWatch.title}
          />
          {/* <img src={mustWatch.posterPath} alt={mustWatch.title} /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
