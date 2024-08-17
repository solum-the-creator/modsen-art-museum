import { useCallback, useMemo, useState } from 'react';
import { GeneralError } from '@components/errors/general-error';
import { Loader } from '@components/loader';
import { Pagination } from '@components/pagination';
import { PictureCard } from '@components/picture-card';
import { SortSelect } from '@components/sort-select';
import { ApiEndpoints } from '@constants/api';
import { SORT_OPTIONS } from '@constants/common';
import { PictureData } from '@customTypes/api-types';
import { SortOption } from '@customTypes/common';
import { useFetch } from '@hooks/use-fetch';
import { createFieldsString, getImageUrl } from '@utils/api-utils';
import { sortPictures } from '@utils/sort-utils';

import style from './style.module.scss';

type PictureListProps = {
    searchQuery?: string;
};

export const PictureList = ({ searchQuery }: PictureListProps) => {
    const {
        data: pictures,
        isLoading,
        error,
    } = useFetch<PictureData[]>({
        endpoint: searchQuery ? `${ApiEndpoints.ARTWORKS}/search` : ApiEndpoints.ARTWORKS,
        page: 1,
        fields: createFieldsString<PictureData>([
            'id',
            'title',
            'artist_title',
            'image_id',
            'is_public_domain',
        ]),
        q: searchQuery || undefined,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState<SortOption>(SORT_OPTIONS.DEFAULT);
    const picturePerPage = 3;

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleSortChange = useCallback((option: SortOption) => {
        setSortOption(option);
    }, []);

    const sortedPictures = useMemo(() => {
        const validPictures = pictures || [];

        return sortPictures(validPictures, sortOption);
    }, [pictures, sortOption]);

    const totalPages = useMemo(
        () => Math.ceil(sortedPictures.length / picturePerPage),
        [sortedPictures.length, picturePerPage],
    );

    const displayedPictures = useMemo(
        () =>
            sortedPictures.slice((currentPage - 1) * picturePerPage, currentPage * picturePerPage),
        [sortedPictures, currentPage, picturePerPage],
    );

    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }

    if (error) {
        return <GeneralError message='An error occurred. Please try again.' />;
    }

    return (
        <div className={style.container}>
            <SortSelect onChange={handleSortChange} />
            <div className={style.picture_list}>
                {displayedPictures.map((picture) => (
                    <PictureCard
                        key={picture.id}
                        id={picture.id.toString()}
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
