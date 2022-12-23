import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useState, useContext } from "react";
import { CurrentContext } from "../lib/CurrentContext";

const MovieCard: React.FC<{ movie: FeaturedMovie }> = (props) => {
  const [isShown, setIsShown] = useState(false);

  const currentContext = useContext(CurrentContext);

  const modalHandler = () => {
    currentContext.setIsModalOpen(currentContext.isOpen);
    currentContext.setCurrent(props.movie);
  };

  const enterHandler = (e: React.MouseEvent) => {
    setIsShown(true);
    }  

  return (
    <div
      className=" duration-1000 hover:bg-opacity-50 min-w-[16%] rounded-lg max-w-sm "

      onMouseEnter={enterHandler}
      onMouseLeave={() => setIsShown(false)}
      onClick={modalHandler}
    >
      <Image
        src={props.movie.posterPath}
        height={200}
        width={250}
        alt={props.movie.title}
      />

      {isShown && (
        <div className=" absolute z-[1000] top-0 -translate-x-[10%] w-[250px] bg-zinc-600 h-[400px] rounded-xl shadow-lg p-1 -translate-y-5 hover:scale-125 duration-1000">
          <Image
          className="rounded-xl"
        src={props.movie.backdropPath}
        height={200}
        width={350}
        alt={props.movie.title}
      /> 
      <p className="text-zinc-100 p-5">{props.movie.overview}</p>
      
      </div>)}
    </div>
  );
};

export default MovieCard;
