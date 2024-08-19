export type PictureData = {
    id: number;
    title: string;
    artist_title?: string;
    is_public_domain: boolean;
    image_id?: string;
};

export type DetailPictureData = PictureData & {
    date_display?: string;
    place_of_origin?: string;
    dimensions?: string;
    credit_line?: string;
    artwork_type_title?: string;
};
