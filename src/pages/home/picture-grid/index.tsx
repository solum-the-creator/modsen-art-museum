import { PictureCard } from '@components/picture-card';
import { ApiEndpoints } from '@constants/api';
import { PictureData } from '@customTypes/api-types';
import { useFetch } from '@hooks/use-fetch';
import { createFieldsString, getImageUrl } from '@utils/api-utils';

import style from './style.module.scss';

export const PictureGrid = () => {
    const {
        data: pictures,
        isLoading,
        error,
    } = useFetch<PictureData[]>({
        endpoint: ApiEndpoints.ARTWORKS,
        fields: createFieldsString<PictureData>(),
        limit: 9,
    });

    const validPictures = pictures || [];

    return (
        <div className={style.container}>
            {validPictures.map((picture) => (
                <PictureCard
                    key={picture.id}
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
