import { SORT_OPTIONS } from '@constants/common';
import { PictureData } from '@customTypes/api-types';
import { SortOption } from '@customTypes/common';
import { sortPictures } from '@utils/sort-utils';

describe('sortPictures', () => {
    const pictures: PictureData[] = [
        { id: 1, title: 'Sunrise', artist_title: 'Alice', is_public_domain: true },
        { id: 2, title: 'Moonlight', artist_title: 'Bob', is_public_domain: false },
        { id: 3, title: 'Starlight', artist_title: 'Charlie', is_public_domain: true },
        { id: 4, title: 'Dawn', artist_title: 'Alice', is_public_domain: false },
        { id: 5, title: 'Twilight', artist_title: '', is_public_domain: true },
    ];

    it('should sort pictures by title in ascending order', () => {
        const sorted = sortPictures(pictures, SORT_OPTIONS.TITLE_ASC);
        const expectedTitles = ['Dawn', 'Moonlight', 'Starlight', 'Sunrise', 'Twilight'];

        expect(sorted.map((picture) => picture.title)).toEqual(expectedTitles);
    });

    it('should sort pictures by title in descending order', () => {
        const sorted = sortPictures(pictures, SORT_OPTIONS.TITLE_DESC);
        const expectedTitles = ['Twilight', 'Sunrise', 'Starlight', 'Moonlight', 'Dawn'];

        expect(sorted.map((picture) => picture.title)).toEqual(expectedTitles);
    });

    it('should sort pictures by artist_title in ascending order', () => {
        const sorted = sortPictures(pictures, SORT_OPTIONS.ARTIST_TITLE_ASC);
        const expectedArtistTitles = ['', 'Alice', 'Alice', 'Bob', 'Charlie'];

        expect(sorted.map((picture) => picture.artist_title)).toEqual(expectedArtistTitles);
    });

    it('should sort pictures by artist_title in descending order', () => {
        const sorted = sortPictures(pictures, SORT_OPTIONS.ARTIST_TITLE_DESC);
        const expectedArtistTitles = ['Charlie', 'Bob', 'Alice', 'Alice', ''];

        expect(sorted.map((picture) => picture.artist_title)).toEqual(expectedArtistTitles);
    });

    it('should return original array if sort option is not recognized', () => {
        const sorted = sortPictures(pictures, 'UNKNOWN_OPTION' as SortOption);

        expect(sorted).toEqual(pictures);
    });

    it('should handle empty artist_title fields correctly when sorting by artist_title', () => {
        const sortedAsc = sortPictures(pictures, SORT_OPTIONS.ARTIST_TITLE_ASC);
        const expectedAscArtistTitles = ['', 'Alice', 'Alice', 'Bob', 'Charlie'];

        expect(sortedAsc.map((picture) => picture.artist_title)).toEqual(expectedAscArtistTitles);

        const sortedDesc = sortPictures(pictures, SORT_OPTIONS.ARTIST_TITLE_DESC);
        const expectedDescArtistTitles = ['Charlie', 'Bob', 'Alice', 'Alice', ''];

        expect(sortedDesc.map((picture) => picture.artist_title)).toEqual(expectedDescArtistTitles);
    });
});
