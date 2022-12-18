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

  return (
    <div
      className="hover:scale-110 duration-1000 hover:bg-opacity-50 min-w-[16%] rounded-lg max-w-sm hover:z-50"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={modalHandler}
    >
      <Image
        src={props.movie.posterPath}
        height={200}
        width={250}
        alt={props.movie.title}
      />

      {/* {isShown && (
            <div className="bg-zinc-900 bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-zinc-100">{props.movie.title}</h1>
                <p className="text-zinc-100">{props.movie.overview}</p>
                </div> )} */}
    </div>
  );
};

export default MovieCard;
