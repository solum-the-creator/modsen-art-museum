import { SORT_OPTIONS } from '@constants/common';
import { PictureData } from '@customTypes/api-types';
import { SortOption } from '@customTypes/common';

export const sortPictures = (pictures: PictureData[], sortOption: SortOption) => {
    switch (sortOption) {
        case SORT_OPTIONS.TITLE_ASC:
            return [...pictures].sort((a, b) => a.title.localeCompare(b.title));
        case SORT_OPTIONS.TITLE_DESC:
            return [...pictures].sort((a, b) => b.title.localeCompare(a.title));
        case SORT_OPTIONS.ARTIST_TITLE_ASC:
            return [...pictures].sort((a, b) =>
                (a.artist_title || '').localeCompare(b.artist_title || ''),
            );
        case SORT_OPTIONS.ARTIST_TITLE_DESC:
            return [...pictures].sort((a, b) =>
                (b.artist_title || '').localeCompare(a.artist_title || ''),
            );
        default:
            return pictures;
    }
};
