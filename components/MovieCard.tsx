import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useState } from "react";

const MovieCard: React.FC<{movie: FeaturedMovie}> = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="hover:scale-110 duration-1000 hover:bg-opacity-50 min-w-[16%] rounded-lg max-w-sm hover:z-50"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
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
