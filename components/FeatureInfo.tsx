import { useContext } from "react";
import { MovieContext } from "../lib/MovieContext";
import FeaturedMovie from "../models/FeaturedMovie";
import Image from "next/image";
import { CurrentContext } from "../lib/CurrentContext";


const FeatureInfo: React.FC<{ movie: FeaturedMovie }> = (props) => {
  const movieContext = useContext(MovieContext);
  const currentContext = useContext(CurrentContext);

  const modalHandler = () => {
    currentContext.setIsModalOpen(currentContext.isOpen);
    currentContext.setCurrent(props.movie);
  };

  const movies = movieContext.movies;
  console.log(movies);

  return (
    <div className=" z-50 absolute text-rose-600 top-60 left-28 info flex flex-col gap-16 font-extrabold">
      <h1 className="text-6xl font bold">{movies[1]?.title}</h1>
      <div className="flex gap-5 w-full justify-center text-zinc-900">
        <button className="pr-8 pl-8 p-2 bg-zinc-200 text-2xl font-bold rounded-sm flex active:scale-95 justify-center items-center gap-2">
          <Image src="/play_arrow.svg" height={40} width={40} alt="play" />
          Play
        </button>
        <button
          className="pr-8 pl-8 p-2 bg-zinc-500 text-2xl active:scale-95 hover:bg-zinc-600 rounded-sm bg-opacity-20 flex justify-center hover:bg-opacity-40 items-center gap-2 text-zinc-100 font-semibold"
          onClick={modalHandler}
        >
          <Image src="/info.svg" height={40} width={40} alt="info" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default FeatureInfo;
