import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useContext } from "react";
import { CurrentContext } from "../lib/CurrentContext";

const MovieModal: React.FC<{ open: boolean, movie: FeaturedMovie | null }> = (props) => {

  const currentContext = useContext(CurrentContext);

  const closeHandler = () => {
    currentContext.setIsModalOpen(currentContext.isOpen);
  }

  const releaseYear = props.movie?.releaseDate.split('-')[0];

if (!props.open) return null

return (

<>
  <div className='modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]' ></div>
    <div className='bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-3xl overflow-y-scroll scrollbar-hide h-5/6 z-[2001]'>
      <div className="hover:bg-zinc-400 rounded-full bg-opacity-50 active:scale-95 absolute top-3 right-3"
      onClick={closeHandler}
      >
      <Image src="/close.svg" height={40} width={40} alt="X" />
      
      </div>

      {/* <h1 className='text-2xl font-bold mt-5 flex'>{props.movie?.title}</h1> */}
      <div className="w-full rounded-xl">
        <Image src={props.movie!.backdropPath} height={800} width={800} alt={props.movie!.title}/>
      </div>
      <div className="flex w-full mt-1">
      <h2 className=" ml-16 font-semibold text-lg">{releaseYear}</h2>
        <h2 className=" ml-16 font-semibold text-lg">{props.movie?.mediaType}</h2>
        <div className="hover:cursor-pointer active:scale-90 p-1 bg-zinc-800 rounded-2xl flex items-centers pr-2 font-semibolds">
        <Image className="" src="/add.svg" height={20} width={20} alt="add"/>
        <p>Add to Library</p>
        </div>
      </div>
      <div className="p-5">
      <p>{props.movie?.overview}</p>
      </div>
  </div>
</> 
)
  
}

export default MovieModal