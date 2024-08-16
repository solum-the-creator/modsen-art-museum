import { useState } from 'react';
import { GeneralError } from '@components/errors/general-error';
import { Loader } from '@components/loader';
import { Pagination } from '@components/pagination';
import { PictureCard } from '@components/picture-card';
import { ApiEndpoints } from '@constants/api';
import { PictureData } from '@customTypes/api-types';
import { useFetch } from '@hooks/use-fetch';
import { createFieldsString, getImageUrl } from '@utils/api-utils';

import style from './style.module.scss';

export const PictureList = () => {
    const {
        data: pictures,
        isLoading,
        error,
    } = useFetch<PictureData[]>({
        endpoint: ApiEndpoints.ARTWORKS,
        page: 10,
        fields: createFieldsString<PictureData>(),
    });

    const [currentPage, setCurrentPage] = useState(1);
    const picturePerPage = 3;

    const validPictures = pictures || [];
    const totalPages = Math.ceil(validPictures.length / picturePerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const displayedPictures = validPictures.slice(
        (currentPage - 1) * picturePerPage,
        currentPage * picturePerPage,
    );

    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }

    if (error) {
        return <GeneralError message='An error occurred. Please try again.' />;
    }

    return (
        <div className={style.container}>
            <div className={style.picture_list}>
                {displayedPictures.map((picture) => (
                    <PictureCard
                        key={picture.id}
                        id={picture.id}
                        title={picture.title}
                        artist={picture.artist_title}
                        image={getImageUrl(picture.image_id)}
                        isPublic={picture.is_public_domain}
                    />
                ))}
            </div>
            <div className={style.pagination}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
