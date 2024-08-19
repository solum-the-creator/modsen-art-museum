import FavoriteIcon from '@assets/icons/bookmark-icon.svg';
import ErrorBoundary from '@components/error-boundary';
import { GeneralError } from '@components/errors/general-error';
import { useFavorites } from '@hooks/use-favorites';

import { PictureGrid } from './picture-grid';

import style from './style.module.scss';

export const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>
                    Here Are Your <br />
                    <span className={style.highlight}>
                        <FavoriteIcon /> Favorites
                    </span>
                </h1>
                <div className={style.favorites_block}>
                    <div className={style.text_block}>
                        <h3 className={style.subtitle}>Saved by you</h3>
                        <h2 className={style.title}>Your favorites list</h2>
                    </div>
                    {favorites.length === 0 ? (
                        <GeneralError message='Your favorites list is empty' />
                    ) : (
                        <ErrorBoundary fallback={<GeneralError />}>
                            <PictureGrid favorites={favorites} />
                        </ErrorBoundary>
                    )}
                </div>
            </div>
        </div>
    );
};
