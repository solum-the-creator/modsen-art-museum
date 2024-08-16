import { GeneralError } from '@components/errors/general-error';
import { Loader } from '@components/loader';
import { PictureCard } from '@components/picture-card';
import { ApiEndpoints } from '@constants/api';
import { PictureData } from '@customTypes/api-types';
import { useFavorites } from '@hooks/use-favorites';
import { useFetch } from '@hooks/use-fetch';
import { getImageUrl } from '@utils/api-utils';

import style from './style.module.scss';

export const PictureGrid = () => {
    const { favorites } = useFavorites();
    const {
        data: pictures,
        isLoading,
        error,
    } = useFetch<PictureData[]>({
        endpoint: ApiEndpoints.ARTWORKS,
        ids: favorites,
    });

    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }

    if (error) {
        return <GeneralError message='An error occurred. Please try again.' />;
    }

    if (!pictures) {
        return <GeneralError message='No data available.' />;
    }

    return (
        <div className={style.container}>
            {pictures.map((picture) => (
                <PictureCard
                    key={picture.id}
                    id={picture.id.toString()}
                    title={picture.title}
                    image={getImageUrl(picture.image_id)}
                    artist={picture.artist_title}
                    isPublic={picture.is_public_domain}
                    variant='small'
                />
            ))}
        </div>
    );
};
