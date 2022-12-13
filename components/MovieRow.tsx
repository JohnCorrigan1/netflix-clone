import { MovieContext } from "../lib/MovieContext";
import { useContext, useState } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const MovieRow: React.FC = () => {
  const [count, setCount] = useState(2);

  const moviesContext = useContext(MovieContext);
  const groupOne = moviesContext.movies.slice(0, 6);
  // const groupTwo = moviesContext.movies.slice(6, 12);
  // const groupThree = moviesContext.movies.slice(12, 18);
  // const groupFour = moviesContext.movies.slice(14, 20);
  return (
    <div className="flex gap-10 w-full justify-center items-center overflow-hidden">

  <div className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/left.svg"
          height={100}
          width={100}
          alt="left"
          onClick={() => setCount(count - 1)}
        />
      </div> 
      <div className={"duration-1000 flex gap-3 justify-center z-0"}>
      { moviesContext.movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
        </div>
      {/* {count === 1 &&
        groupTwo.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      {count === 2 &&
        groupThree.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      {count === 3 &&
        groupFour.map((movie) => {
          return <MovieCard movie={movie} />;
        })} */}
   <div className="absolute right-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/right.svg"
          height={100}
          width={100}
          alt="left"
          onClick={() => setCount(count + 1)}
        />
      </div> 
    </div>
  );
};

export default MovieRow;
