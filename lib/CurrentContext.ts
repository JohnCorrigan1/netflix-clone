import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext, useEffect } from "react";


type CurrentContextType = {
    movie: FeaturedMovie;
    setCurrent: (movies: FeaturedMovie) => void;
}

export const MovieContext = createContext<CurrentContextType>({
    movie: movie,
    setCurrent: () => {} 
});

type Props = {
    children?: React.ReactChild | React.ReactChild[];
};

const CurrentContextProvider: React.FC<Props> = (props) => {
    const [movie, setMovie] = useState<FeaturedMovie | string>("");
   const contextValue: CurrentContextType = {

        movie: movie,
        setCurrent: setCurrent,
        // addMovieHandler: (movie: FeaturedMovie) => {
        //     setMovies((prevMovies) => {
        //         return prevMovies.concat(movie);
        //     });
        // }
        setCurrent: (movie: FeaturedMovie) => {
            setMovie(movie);
        }
    };

    return (
        <CurrentContext.Provider value={contextValue}>
            {props.children}
        </CurrentContext.Provider>
    )
}

export default CurrentContextProvider;
    

