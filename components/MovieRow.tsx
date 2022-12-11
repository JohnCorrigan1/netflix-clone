import { MovieContext } from "../lib/MovieContext"
import { useContext } from "react"
import MovieCard from "./MovieCard";

const MovieRow: React.FC = () => {

    const moviesContext = useContext(MovieContext);

    return (
        <div className="flex gap-5 h-48">
            {moviesContext.movies.map((movie) => {
                return <MovieCard movie={movie} />
            })}
        </div>
    )
}

export default MovieRow