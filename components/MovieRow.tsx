import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import FeaturedMovie from '../models/FeaturedMovie';

const MovieRow: React.FC<{ movies: FeaturedMovie[]}> = (props) => {
  const [count, setCount] = useState(-1);
  const [position, setPosition] = useState(-100);
  const [sliderPosition, setSliderPosition] = useState("");

  useEffect(() => {
    if(count > 0){
    setSliderPosition(`-translate-x-[${position.toString()}%]`)
    }
    else if(count === -1){
      setSliderPosition(`translate-x-[100%]`)
    }
    else if(count === 0){
      setSliderPosition(`translate-x-[0%]`)
    }
  }, [count, position])

  const incrementHandler = () => {
    setCount(count + 1)
    setPosition(position + 100)
    console.log(count, position)
  }

  const decrementHandler = () => {
    if(count !== -1){
    setPosition(position - 100)
    setCount(count - 1)
    }
  }

  return (
    <div className="flex gap-5 mr-10 w-full justify-center items-center z-0">

  <div  onClick={decrementHandler} className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/leftArrow.svg"
          height={100}
          width={100}
          alt="left"
         
        />
      </div>
      <div className={sliderPosition + " duration-1000 flex gap-1 justify-center pl-10 pr-10"}>
      { props.movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
        })}
        </div>
   <div onClick={incrementHandler} className="absolute right-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/rightArrow.svg"
          height={100}
          width={100}
          alt="left"
        />
      </div> 
    </div>
  );
};

export default MovieRow;

