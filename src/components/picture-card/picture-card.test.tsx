import { BrowserRouter } from 'react-router-dom';
import { useFavorites } from '@hooks/use-favorites';
import { fireEvent, render, screen } from '@testing-library/react';

import { PictureCard } from '.';

jest.mock('@hooks/use-favorites');

const mockUseFavorites = useFavorites as jest.MockedFunction<typeof useFavorites>;

describe('PictureCard', () => {
    const mockAddFavorite = jest.fn();
    const mockRemoveFavorite = jest.fn();
    const mockIsFavorite = jest.fn();

    beforeEach(() => {
        mockUseFavorites.mockReturnValue({
            favorites: [],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            isFavorite: mockIsFavorite,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderComponent = (props = {}) =>
        render(
            <BrowserRouter>
                <PictureCard
                    id='1'
                    title='Test Picture'
                    isPublic={true}
                    artist='Test Artist'
                    image='test-image.jpg'
                    variant='big'
                    {...props}
                />
            </BrowserRouter>,
        );

    it('should render picture card with correct title and artist', () => {
        renderComponent();

        expect(screen.getByText('Test Picture')).toBeInTheDocument();
        expect(screen.getByText('Test Artist')).toBeInTheDocument();
        expect(screen.getByText('Public')).toBeInTheDocument();
    });

    it('should render image with correct src and alt text', () => {
        renderComponent();

        const img = screen.getByAltText('Test Picture');

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'test-image.jpg');
    });

    it('should show default image before the actual image is loaded', () => {
        renderComponent();

        const img = screen.getByAltText('Test Picture');

        expect(img).toHaveStyle({ display: 'none' });

        fireEvent.load(img);
        expect(img).toHaveStyle({ display: 'block' });
    });

    it('should navigate to the correct detail page on link click', () => {
        renderComponent();

        const link = screen.getByRole('link', { name: /test picture/i });

        expect(link).toHaveAttribute('href', '/detail-info/1');
    });

    it('should call addFavorite when the picture is not a favorite', () => {
        mockIsFavorite.mockReturnValue(false);

        renderComponent();

        const favoriteButton = screen.getByRole('button');

        fireEvent.click(favoriteButton);

        expect(mockAddFavorite).toHaveBeenCalledWith('1');
    });

    it('should call removeFavorite when the picture is a favorite', () => {
        mockIsFavorite.mockReturnValue(true);

        renderComponent();

        const favoriteButton = screen.getByRole('button');

        fireEvent.click(favoriteButton);

        expect(mockRemoveFavorite).toHaveBeenCalledWith('1');
    });

    it('should render small variant correctly', () => {
        renderComponent({ variant: 'small' });

        expect(screen.getByAltText('Test Picture')).toHaveClass('small_image');
    });
});
