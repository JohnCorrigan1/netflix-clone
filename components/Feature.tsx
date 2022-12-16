import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useContext, useEffect, useState } from "react";
import FeatureInfo from "./FeatureInfo";
import { MovieContext } from "../lib/MovieContext";

const Feature: React.FC = () => {
  const [mustWatch, setMustWatch] = useState<FeaturedMovie | null>(null);

  const moviesContext = useContext(MovieContext);

  useEffect(() => {
    getTrending();
    getConfig();
  }, []);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
    );

    const movies = await data.json();
    const featured = movies.results[1];
    console.log(featured);
    setMustWatch(
      new FeaturedMovie(
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
    movies.results.forEach((movie: any) => {
      moviesContext.addMovieHandler(
        new FeaturedMovie(
          movie.id,
          movie.title,
          movie.mediaType,
          movie.poster_path,
          movie.backdrop_path,
          movie.vote_average,
          movie.overview,
          movie.release_date
        )
      );
    });
    console.log(mustWatch);
    console.log(moviesContext.movies);
  };

  const getConfig = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/configuration?api_key=f9e8c6b0f08e00ab858099b6fe804ea3"
    );

    const config = await data.json();
    console.log(config);
  };

  return (
    <>
      {mustWatch && (
        <>
          <div className="z-50">
            {moviesContext.movies[1].title && <FeatureInfo />}
          </div>
          <div className="feature -z-50">
            <Image
              className="poster"
              src={mustWatch.backdropPath}
              width={1920}
              height={600}
              alt={mustWatch.title}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Feature;
