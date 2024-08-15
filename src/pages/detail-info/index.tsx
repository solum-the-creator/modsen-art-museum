import { useParams } from 'react-router-dom';
import testImage from '@assets/picture1.jpg';
import { FavoriteButton } from '@components/buttons/favorite-button';

import style from './style.module.scss';

export const DetailInfo = () => {
    const { id } = useParams();

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.image_container}>
                    <img className={style.image} src={testImage} alt='title name' />
                    <div className={style.button}>
                        <FavoriteButton />
                    </div>
                </div>
                <div className={style.info}>
                    <h1 className={style.title}>
                        Charles V, bust length, holding a sword, facing right
                    </h1>
                    <div className={style.artist_info}>
                        <h2 className={style.subtitle}>Giovanni Britto</h2>
                        <p className={style.year}>1535-45</p>
                    </div>
                </div>
                <div className={style.overview}>
                    <h3 className={style.title}>Overview</h3>
                    <div className={style.overview_info}>
                        <p className={style.overview_item}>
                            <span className={style.label}>Artist nacionality:</span>
                            German
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Dimensions: Sheet:</span>
                            19 3/8 x 13 11/16 in. (49.2 x 34.8 cm)
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Credit Line:</span>
                            Rogers Fund, 1917
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Repository:</span>
                            Metropolitan Museum of Art, New York, NY
                        </p>
                        <p className={style.overview_item}>Public</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
