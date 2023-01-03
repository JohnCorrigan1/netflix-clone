import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useState, useContext, useEffect } from "react";
import { CurrentContext } from "../lib/CurrentContext";
import { LibraryContext } from "../lib/FavoritesContext";

const MovieCard: React.FC<{ movie: FeaturedMovie }> = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null)

  const currentContext = useContext(CurrentContext);
  const libraryContext = useContext(LibraryContext);

  const modalHandler = () => {
    currentContext.setIsModalOpen(currentContext.isOpen);
    currentContext.setCurrent(props.movie);
  };

  const addLibraryHandler = () => {
    libraryContext.addLibraryHandler(props.movie!);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const enterHandler = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setIsShown(true);
    }, 1000);
    setTimeoutId(id);
  }

  const leaveHandler = () => {
    clearTimeout(timeoutId);
    setIsShown(false);
  }

  return (
    
    <div
      className=" duration-1000 hover:bg-opacity-50 min-w-[16%] rounded-lg max-w-sm "

      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      onClick={modalHandler}
    >

      <Image
      className="rounded-lg"
        src={props.movie.posterPath}
        height={200}
        width={250}
        alt={props.movie.title}
      />
      {isShown && (
        <div className=" absolute z-[1000] top-3 scale-125  w-[300px] bg-zinc-600 min-h-[350px] rounded-xl shadow-lg p-1 showInfo" >
          <Image
          className="rounded-xl"
        src={props.movie.backdropPath}
        height={200}
        width={350}
        alt={props.movie.title}
      /> 
      <p className="text-zinc-100 p-5 text-xs">{props.movie.overview}</p>
      </div>)}
    </div>
  );
};

export default MovieCard;
