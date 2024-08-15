import testImage from '@assets/picture1.jpg';
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

export const PictureGrid = () => (
    <div className={style.container}>
        {pictures.map((picture) => (
            <PictureCard key={picture.id} {...picture} variant='small' />
        ))}
    </div>
);
