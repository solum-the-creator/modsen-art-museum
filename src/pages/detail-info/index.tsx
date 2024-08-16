import { useParams } from 'react-router-dom';
import { FavoriteButton } from '@components/buttons/favorite-button';
import { GeneralError } from '@components/errors/general-error';
import { Loader } from '@components/loader';
import { ApiEndpoints } from '@constants/api';
import { DetailPictureData } from '@customTypes/api-types';
import { useFetch } from '@hooks/use-fetch';
import { createFieldsString, getImageUrl } from '@utils/api-utils';

import style from './style.module.scss';

export const DetailInfo = () => {
    const { id } = useParams();
    const {
        data: picture,
        isLoading,
        error,
    } = useFetch<DetailPictureData>({
        endpoint: `${ApiEndpoints.ARTWORKS}/${id}`,
        fields: createFieldsString<DetailPictureData>(),
    });

    if (isLoading) {
        return <Loader isLoading={isLoading} size={120} />;
    }

    if (error) {
        if (error.status === 404) {
            return <GeneralError message='Picture not found.' />;
        }

        return <GeneralError message='An error occurred. Please try again.' />;
    }

    if (!picture) {
        return <GeneralError message='No data available.' />;
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.image_container}>
                    <img
                        className={style.image}
                        src={getImageUrl(picture.image_id)}
                        alt={picture.title}
                    />
                    <div className={style.button}>
                        <FavoriteButton />
                    </div>
                </div>
                <div className={style.info}>
                    <h1 className={style.title}>{picture.title}</h1>
                    <div className={style.artist_info}>
                        <h2 className={style.subtitle}>{picture.artist_title}</h2>
                        <p className={style.year}>{picture.date_display}</p>
                    </div>
                </div>
                <div className={style.overview}>
                    <h3 className={style.title}>Overview</h3>
                    <div className={style.overview_info}>
                        <p className={style.overview_item}>
                            <span className={style.label}>Artist nacionality:</span>
                            {picture.place_of_origin}
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Dimensions: Sheet:</span>
                            {picture.dimensions}
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Type:</span>
                            {picture.artwork_type_title}
                        </p>
                        <p className={style.overview_item}>
                            <span className={style.label}>Credit Line:</span>
                            {picture.credit_line}
                        </p>
                        <p className={style.overview_item}>
                            {picture.is_public_domain ? 'Public' : 'Private'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
