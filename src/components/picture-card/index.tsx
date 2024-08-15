import { useState } from 'react';
import DefaultImage from '@assets/clear-image.svg';
import { FavoriteButton } from '@components/buttons/favorite-button';

import style from './style.module.scss';

type PictureCardProps = {
    title: string;
    artist: string;
    isPublic: boolean;
    image?: string;
    variant?: 'small' | 'big';
};

export const PictureCard = ({
    title,
    artist,
    isPublic,
    image,
    variant = 'big',
}: PictureCardProps) => {
    const isPublicText = isPublic ? 'Public' : 'Private';
    const isSmall = variant === 'small';
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={isSmall ? style.small_card : style.large_card}>
            {!isSmall && (
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
            )}

            <div className={style.card_content}>
                {isSmall && (
                    <div className={style.small_card_image}>
                        <img
                            src={image}
                            alt={title}
                            onLoad={() => setIsLoaded(true)}
                            style={{ display: isLoaded ? 'block' : 'none' }}
                            className={style.small_image}
                        />
                        {!isLoaded && <DefaultImage />}
                    </div>
                )}
                <div className={style.card_info}>
                    <div className={style.picture_credentials}>
                        <h4 className={style.card_title}>{title}</h4>
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
