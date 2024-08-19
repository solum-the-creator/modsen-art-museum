import { API_IMAGE_BASE_URL } from '@constants/api';
import { createFieldsString, getImageUrl } from '@utils/api-utils';

describe('getImageUrl', () => {
    it('should return correct image URL when imageId is provided', () => {
        const imageId = '12345';
        const expectedUrl = `${API_IMAGE_BASE_URL}/${imageId}/full/400,/0/default.jpg`;

        expect(getImageUrl(imageId)).toBe(expectedUrl);
    });

    it('should return an empty string when no imageId is provided', () => {
        expect(getImageUrl()).toBe('');
    });
});

describe('createFieldsString', () => {
    it('should create a comma-separated string from an array of keys', () => {
        const keys = ['name', 'description', 'price'] as Array<
            keyof { name: string; description: string; price: number }
        >;
        const expectedString = 'name,description,price';

        expect(createFieldsString(keys)).toBe(expectedString);
    });

    it('should return an empty string for an empty array', () => {
        expect(createFieldsString([])).toBe('');
    });
});
