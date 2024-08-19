import { createContext, useCallback, useMemo, useState } from 'react';

type FavoritesContextType = {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<string[]>(() => {
        const savedFavorites = sessionStorage.getItem('favorites');

        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const addFavorite = useCallback((id: string) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, id];

            sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));

            return updatedFavorites;
        });
    }, []);

    const removeFavorite = useCallback((id: string) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((favoriteId) => favoriteId !== id);

            sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));

            return updatedFavorites;
        });
    }, []);

    const value = useMemo(
        () => ({
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite: (id: string) => favorites.includes(id),
        }),
        [favorites, addFavorite, removeFavorite],
    );

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
