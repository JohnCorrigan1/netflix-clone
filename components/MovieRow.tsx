import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import FeaturedMovie from '../models/FeaturedMovie';
import { motion } from "framer-motion";

const MovieRow: React.FC<{ movies: FeaturedMovie[]}> = (props) => {

  const [position, setPosition] = useState(100);

  const incrementHandler = () => {
    setPosition(position - 90)
  }

  const decrementHandler = () => {
    setPosition(position + 90)
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
      <motion.div className={" flex gap-1 justify-center pl-32 pr-10"}
      animate={{
        x: `${position}%`,
        transition: { duration: 1 }
      }}
      >
    
      { props.movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
        })}
        </motion.div>
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

