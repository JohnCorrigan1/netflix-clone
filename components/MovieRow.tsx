import { MovieContext } from "../lib/MovieContext";
import { useContext, useState } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const MovieRow: React.FC = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(0);
  // const [sliderPosition, setSliderPosition] = useState("");

  // const sliderPosition = "-translate-x-[" + position.toString() + "%]"

  const incrementHandler = () => {

    setCount(count + 1)
    setPosition(position + 100)
    // setSliderPosition("-translate-x-[" + position + "%")
    console.log(count, position)
  }

  const sliderPosition = "-translate-x-[" + position.toString() + "%]"

  const decrementHandler = () => {
    setPosition(position - 100)
    setCount(count - 1)
    console.log(count, position)
    // setSliderPosition("-translate-x-[" + position + "%")
  }

  const moviesContext = useContext(MovieContext);
  return (
    <div className="flex gap-10 w-full justify-center items-center overflow-hidden">

  <div className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/left.svg"
          height={100}
          width={100}
          alt="left"
          onClick={decrementHandler}
        />
      </div>
      <div className={(count === 0 ? "" : sliderPosition) + " duration-1000 flex gap-3 justify-center z-0 "}>
      { moviesContext.movies.map((movie) => {
          return <MovieCard movie={movie} />
        })}
        </div>
   <div className="absolute right-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/right.svg"
          height={100}
          width={100}
          alt="left"
          onClick={incrementHandler}
        />
      </div> 
    </div>
  );
};

export default MovieRow;

