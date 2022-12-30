import { createContext, useState } from 'react';
import FeaturedMovie from '../models/FeaturedMovie';
import MovieContextProvider from './MovieContext';


export interface LibraryContextType {
    library: FeaturedMovie[];
    setLibrary: (library: FeaturedMovie[]) => void;
    addLibraryHandler: (favorite: FeaturedMovie) => void;
    removeLibrary: (id: number) => void;
}

export const LibraryContext = createContext<LibraryContextType>({
    library: [],
    setLibrary: () => {},
    addLibraryHandler: () => {},
    removeLibrary: () => {},
});

type Props = {
    children?: React.ReactChild | React.ReactChild[];
};

const LibraryContextProvider: React.FC<Props> = (props) => {
    const [library, setLibrary] = useState<FeaturedMovie[]>([]);

   const contextValue: LibraryContextType = {
        library: library,
        setLibrary: setLibrary,
        addLibraryHandler: (movie: FeaturedMovie) => {
            setLibrary((prevLibrary) => {
                return prevLibrary.concat(movie);
            });
        },
        removeLibrary: (id: number) => {
            setLibrary((prevLibrary) => {
                return prevLibrary.filter((movie) => movie.id !== id);
            });
        }
    };

    return (
        <LibraryContext.Provider value={contextValue}>
            {props.children}
        </LibraryContext.Provider>
    )
}

export default LibraryContextProvider;
    

