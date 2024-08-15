import { useState } from 'react';
import testImage from '@assets/picture1.jpg';
import { Pagination } from '@components/pagination';
import { PictureCard } from '@components/picture-card';

import style from './style.module.scss';

const pictures = [
    {
        id: '1',
        title: 'Title 1 Long Title Title 1 Long Title Title 1 Long Title Title 1 sdadsasdLong Title',
        artist: 'Artist 1',
        image: testImage,
        isPublic: true,
    },
    { id: '2', title: 'Title 2', artist: 'Artist 2', isPublic: false },
    { id: '3', title: 'Title 3', artist: 'Artist 3', image: testImage, isPublic: true },
    { id: '4', title: 'Title 4', artist: 'Artist 4', isPublic: false },
    { id: '5', title: 'Title 5', artist: 'Artist 5', image: testImage, isPublic: true },
    { id: '6', title: 'Title 6', artist: 'Artist 6', isPublic: false },
    { id: '7', title: 'Title 7', artist: 'Artist 7', image: testImage, isPublic: true },
];

export const PictureList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const picturePerPage = 3;
    const totalPages = Math.ceil(pictures.length / picturePerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const displayedPictures = pictures.slice(
        (currentPage - 1) * picturePerPage,
        currentPage * picturePerPage,
    );

    return (
        <div className={style.container}>
            <div className={style.picture_list}>
                {displayedPictures.map((picture) => (
                    <PictureCard key={picture.id} {...picture} />
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
