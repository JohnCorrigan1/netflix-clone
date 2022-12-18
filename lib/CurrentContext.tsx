import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext, useContext } from "react";
import { MovieContext } from "./MovieContext";


type CurrentContextType = {
  movie: FeaturedMovie | null;
  isOpen: boolean;
  setCurrent: (movies: FeaturedMovie) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export const CurrentContext = createContext<CurrentContextType>({
    movie: null,
    isOpen: false,
    setCurrent: () => {},
    setIsModalOpen: (isOpen: boolean) => {},
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const CurrentContextProvider: React.FC<Props> = (props) => {
  const [movie, setMovie] = useState<FeaturedMovie | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const contextValue: CurrentContextType = {
    movie: movie,
    isOpen: isOpen,
    setIsModalOpen: (isOpen: boolean) => {
        setIsOpen(!isOpen);
    },
    setCurrent: (movie: FeaturedMovie) => {
      setMovie(movie);
    },
  };

  return (
    <CurrentContext.Provider value={contextValue}>
      {props.children}
    </CurrentContext.Provider>
  );
};

export default CurrentContextProvider;
