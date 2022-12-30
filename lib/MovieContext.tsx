import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext } from "react";


type MovieContextType = {
    movies: FeaturedMovie[];
    setMovies: (movies: FeaturedMovie[]) => void;
    addMovieHandler: (movie: FeaturedMovie) => void;
}

export const MovieContext = createContext<MovieContextType>({
    movies: [],
    setMovies: () => {},
    addMovieHandler: () => {}
});

type Props = {
    children?: React.ReactChild | React.ReactChild[];
};

const MovieContextProvider: React.FC<Props> = (props) => {
    const [movies, setMovies] = useState<FeaturedMovie[]>([]);

   const contextValue: MovieContextType = {
        movies: movies,
        setMovies: setMovies,
        addMovieHandler: (movie: FeaturedMovie) => {
            setMovies((prevMovies) => {
                return prevMovies.concat(movie);
            });
        }
    };

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
    

