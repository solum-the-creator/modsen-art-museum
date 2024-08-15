import { API_IMAGE_BASE_URL } from '@constants/api';

export const getImageUrl = (imageId: string) =>
    `${API_IMAGE_BASE_URL}/${imageId}/full/843,/0/default.jpg`;

export const createFieldsString = <T extends object>() =>
    (Object.keys({} as T) as Array<keyof T>).join(',');
