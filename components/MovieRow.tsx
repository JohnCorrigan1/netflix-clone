import { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import FeaturedMovie from '../models/FeaturedMovie';
import { motion } from "framer-motion";
import { AccountContext } from "../lib/AccountsContext";

const MovieRow: React.FC<{ movies: FeaturedMovie[], query: string }> = (props) => {

  // const moviesNew: FeaturedMovie[] = [];
  const [moviesNew, setMoviesNew] = useState<FeaturedMovie[]>([]);
  const moviess: FeaturedMovie[] = [];
  const accountContext = useContext(AccountContext);

  
  useEffect(() => {
    console.log("in library", accountContext.currentAccount?.library)
    if(props.query !== ""){
    getTrending();
    }
    else if(accountContext.currentAccount?.library !== undefined){
      setMoviesNew(accountContext.currentAccount!.library)
    }
    else {
      setMoviesNew([])
    }
    console.log("new movies", moviesNew)
  }, []);

  const getTrending = async () => {
    const data = await fetch(
      props.query
    );

    const movies = await data.json();
       movies.results.forEach((movie: any) => {
      moviess.push(
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
    setMoviesNew(moviess);
  };


  const [position, setPosition] = useState(100);

  const incrementHandler = () => {
    setPosition(position - 90)
  }

  const decrementHandler = () => {
    setPosition(position + 90)
    }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Trending</h1>
    <div className="flex gap-5 mr-10 w-full justify-center items-center z-0">

  <div  onClick={decrementHandler} className="absolute left-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/leftArrow.svg"
          height={100}
          width={100}
          alt="left"
         
        />
      </div>
    { moviesNew.length > 0 && <motion.div className={" flex gap-1 justify-center pl-32 pr-10"}
      animate={{
        x: `${position}%`,
        transition: { duration: 1 }
      }}
      >
    
      {/* {props.query !== "" ? moviesNew.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
        }) : accountContext.currentAccount?.library.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
        })
        }  */}
        {moviesNew.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />  
        })
        }
        </motion.div> }
        
   <div onClick={incrementHandler} className="absolute right-2 flex items-center cursor-pointer hover:bg-zinc-800 hover:bg-opacity-50 rounded-lg z-50">
        <Image
          src="/rightArrow.svg"
          height={100}
          width={100}
          alt="left"
        />
      </div> 
    </div>
    </div>
  );
};

export default MovieRow;

