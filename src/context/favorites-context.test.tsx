/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from 'react';
import { act, render } from '@testing-library/react';

import { FavoritesContext, FavoritesProvider } from './favorites-context';

describe('FavoritesContext', () => {
    const TestComponent = () => {
        const { favorites, addFavorite, removeFavorite, isFavorite } =
            useContext(FavoritesContext)!;

        return (
            <div>
                <div data-testid='favorites'>{favorites.join(',')}</div>
                <button type='button' onClick={() => addFavorite('1')}>
                    Add Favorite
                </button>
                <button type='button' onClick={() => removeFavorite('1')}>
                    Remove Favorite
                </button>
                <div data-testid='isFavorite'>{isFavorite('1') ? 'true' : 'false'}</div>
            </div>
        );
    };

    beforeEach(() => {
        sessionStorage.clear();
    });

    it('should provide the initial favorites from sessionStorage', () => {
        sessionStorage.setItem('favorites', JSON.stringify(['1', '2']));
        const { getByTestId } = render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>,
        );

        expect(getByTestId('favorites').textContent).toBe('1,2');
    });

    it('should add a favorite and update sessionStorage', () => {
        const { getByTestId, getByText } = render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>,
        );

        act(() => {
            getByText('Add Favorite').click();
        });

        expect(getByTestId('favorites').textContent).toBe('1');
        expect(sessionStorage.getItem('favorites')).toBe(JSON.stringify(['1']));
    });

    it('should remove a favorite and update sessionStorage', () => {
        sessionStorage.setItem('favorites', JSON.stringify(['1', '2']));
        const { getByTestId, getByText } = render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>,
        );

        act(() => {
            getByText('Remove Favorite').click();
        });

        expect(getByTestId('favorites').textContent).toBe('2');
        expect(sessionStorage.getItem('favorites')).toBe(JSON.stringify(['2']));
    });

    it('should correctly identify if an item is a favorite', () => {
        const { getByTestId, getByText } = render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>,
        );

        expect(getByTestId('isFavorite').textContent).toBe('false');

        act(() => {
            getByText('Add Favorite').click();
        });

        expect(getByTestId('isFavorite').textContent).toBe('true');
    });
});
