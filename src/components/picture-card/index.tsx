import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import DefaultImage from '@assets/clear-image.svg';
import { FavoriteButton } from '@components/buttons/favorite-button';
import { UrlPaths } from '@constants/paths';

import style from './style.module.scss';

type PictureCardProps = {
    id: number;
    title: string;
    isPublic: boolean;
    artist?: string;
    image?: string;
    variant?: 'small' | 'big';
};

export const PictureCard = ({
    id,
    title,
    isPublic,
    artist,
    image,
    variant = 'big',
}: PictureCardProps) => {
    const isPublicText = isPublic ? 'Public' : 'Private';
    const isSmall = variant === 'small';
    const [isLoaded, setIsLoaded] = useState(false);

    const path = generatePath(UrlPaths.DETAIL_INFO, { id: String(id) });

    return (
        <div className={isSmall ? style.small_card : style.large_card}>
            {!isSmall && (
                <Link to={path} className={style.link}>
                    <div className={style.large_card_image}>
                        <img
                            src={image}
                            alt={title}
                            className={style.large_image}
                            onLoad={() => setIsLoaded(true)}
                            style={{ display: isLoaded ? 'block' : 'none' }}
                        />
                        {!isLoaded && <DefaultImage />}
                    </div>
                </Link>
            )}

            <div className={style.card_content}>
                {isSmall && (
                    <div className={style.small_card_image}>
                        <Link to={path}>
                            <img
                                src={image}
                                alt={title}
                                onLoad={() => setIsLoaded(true)}
                                style={{ display: isLoaded ? 'block' : 'none' }}
                                className={style.small_image}
                            />
                        </Link>
                        {!isLoaded && <DefaultImage />}
                    </div>
                )}
                <div className={style.card_info}>
                    <div className={style.picture_credentials}>
                        <Link to={path} className={style.link}>
                            <h4 className={style.card_title}>{title}</h4>
                        </Link>
                        <h5 className={style.card_artist}>{artist}</h5>
                    </div>
                    <p className={style.card_public}>{isPublicText}</p>
                </div>
                <div className={style.card_actions}>
                    <FavoriteButton />
                </div>
            </div>
        </div>
    );
};
