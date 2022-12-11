import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";

const MovieCard: React.FC<{movie: FeaturedMovie}> = (props) => {
    return (
        <div className="">
        <Image
            src={props.movie.posterPath}
            height={200}
            width={200}
            alt={props.movie.title}
        />
        </div>
    );
    };

export default MovieCard;
