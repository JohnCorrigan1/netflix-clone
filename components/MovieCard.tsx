import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";

const MovieCard: React.FC<{movie: FeaturedMovie}> = (props) => {
    return (
        <div className=" hover:scale-105">
        <Image
            src={props.movie.posterPath}
            height={200}
            width={250}
            alt={props.movie.title}
        />
        </div>
    );
    };

export default MovieCard;
