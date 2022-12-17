import { createContext } from 'react';


export interface Favorite {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface FavoritesContext {
    favorites: Favorite[];
    addFavorite: (favorite: Favorite) => void;
    removeFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContext>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});