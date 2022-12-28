import { MovieContext } from "../lib/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const MovieRow: React.FC = () => {
  const [count, setCount] = useState(-1);
  const [position, setPosition] = useState(-100);
  const [sliderPosition, setSliderPosition] = useState("translate-x-[100%]");

  // const sliderPosition = "-translate-x-[" + position.toString() + "%]"

  useEffect(() => {
    console.log(count, position)
    // setSliderPosition("-translate-x-[" + position.toString() + "%]")
    if(count > 0){
    setSliderPosition(`-translate-x-[${position.toString()}%]`)
    }
    // else if(count === 1){
    //   setSliderPosition(`-translate-x-[]`)
    // }
    else if(count === -1){
      setSliderPosition(`translate-x-[100%]`)
    }
    else if(count === 0){
      setSliderPosition(`translate-x-[0%]`)
    }
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
    if(count !== -1){
    setPosition(position - 100)
    setCount(count - 1)
    }
    console.log(count, position)
    // setSliderPosition("-translate-x-[" + position + "%")
  }

  const moviesContext = useContext(MovieContext);
  return (
    <div className="flex gap-10 w-full justify-center items-center z-0">

  <div  onClick={decrementHandler} className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/left.svg"
          height={100}
          width={100}
          alt="left"
         
        />
      </div>
      <div className={sliderPosition + " duration-1000 flex gap-1 justify-center pl-10 pr-10"}>
      { moviesContext.movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
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

