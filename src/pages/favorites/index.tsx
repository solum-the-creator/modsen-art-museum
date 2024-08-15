import FavoriteIcon from '@assets/icons/bookmark-icon.svg';

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
                    <h3 className={style.subtitle}>Here some more</h3>
                    <h2 className={style.title}>Other works for you</h2>
                </div>
                <PictureGrid />
            </div>
        </div>
    </div>
);
