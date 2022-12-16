import { MovieContext } from "../lib/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const MovieRow: React.FC = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(0);
  const [sliderPosition, setSliderPosition] = useState("");

  // const sliderPosition = "-translate-x-[" + position.toString() + "%]"

  useEffect(() => {
    console.log(count, position)
    // setSliderPosition("-translate-x-[" + position.toString() + "%]")
    setSliderPosition(`-translate-x-[${position.toString()}%]`)

  }, [count, position])

  // const sliderPosition = "-translate-x-[100%]"


  const incrementHandler = () => {

    setCount(count + 1)
    setPosition(position + 100)
    // setSliderPosition("-translate-x-[" + position + "%")
    console.log(count, position)
  }

  // const sliderPosition = "-translate-x-[" + position.toString() + "%]"
  // const sliderPosition = "-translate-x-[" + position.toString() + "%]"

  const decrementHandler = () => {
    if(count !== 0){
    setPosition(position - 100)
    setCount(count - 1)
    }
    console.log(count, position)
    // setSliderPosition("-translate-x-[" + position + "%")
  }

  const moviesContext = useContext(MovieContext);
  console.log("in row",moviesContext.movies);
  return (
    <div className="flex gap-10 w-full justify-center items-center overflow-hidden">

  <div  onClick={decrementHandler} className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/left.svg"
          height={100}
          width={100}
          alt="left"
         
        />
      </div>
      <div className={sliderPosition + " duration-1000 flex gap-3 justify-center z-0 "}>
      { moviesContext.movies.map((movie) => {
          return (
            <>
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          </>
          )
        })}
        { moviesContext.movies.map((movie) => {
          return <MovieCard movie={movie} />
        })}
        { moviesContext.movies.map((movie) => {
          return <MovieCard movie={movie} />
        })}
        </div>
   <div onClick={incrementHandler} className="absolute right-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/right.svg"
          height={100}
          width={100}
          alt="left"
          
        />
      </div> 
    </div>
  );
};

export default MovieRow;

