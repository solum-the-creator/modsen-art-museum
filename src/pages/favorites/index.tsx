import FavoriteIcon from '@assets/icons/bookmark-icon.svg';
import ErrorBoundary from '@components/error-boundary';
import { GeneralError } from '@components/errors/general-error';

import { PictureGrid } from './picture-grid';

import style from './style.module.scss';

export const Favorites = () => (
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
                <ErrorBoundary fallback={<GeneralError />}>
                    <PictureGrid />
                </ErrorBoundary>
            </div>
        </div>
    </div>
);
