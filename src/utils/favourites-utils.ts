export const getFavorites = () => JSON.parse(sessionStorage.getItem('favorites') || '[]');

export const isFavorite = (id: string) => getFavorites().includes(id);

export const addToFavorites = (id: string) => {
    const favorites = getFavorites();

    if (isFavorite(id)) return;

    favorites.push(id);
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFromFavorites = (id: string) => {
    const favorites = getFavorites();

    favorites.filter((favoriteId: string) => favoriteId !== id);
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
};
