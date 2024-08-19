import { API_BASE_URL } from '@constants/api';
import { useFetch } from '@hooks/use-fetch';
import { renderHook, waitFor } from '@testing-library/react';

describe('useFetch', () => {
    const mockData = {
        data: [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
        ],
    };

    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            }),
        ) as jest.Mock;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should start with loading state', async () => {
        const { result } = renderHook(() => useFetch({ endpoint: 'test-endpoint' }));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(true);
        });
    });

    it('should fetch data successfully', async () => {
        const { result } = renderHook(() => useFetch({ endpoint: 'test-endpoint' }));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toEqual(mockData.data);
        expect(result.current.error).toBeNull();
    });

    it('should handle fetch errors', async () => {
        global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed'))) as jest.Mock;

        const { result } = renderHook(() => useFetch({ endpoint: 'test-endpoint' }));

        await waitFor(() => {
            expect(result.current.error).not.toBeNull();
        });

        expect(result.current.data).toBeNull();
        expect(result.current.error?.message).toBe('Fetch failed');
    });

    it('should construct the URL correctly with query parameters', async () => {
        renderHook(() =>
            useFetch({
                endpoint: 'test-endpoint',
                limit: 10,
                page: 2,
                fields: 'name,description',
                ids: ['1', '2'],
                q: 'test',
            }),
        );

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

        expect(global.fetch).toHaveBeenCalledWith(
            `${API_BASE_URL}/test-endpoint?q=test&ids=1%2C2&page=2&limit=10&fields=name%2Cdescription`,
        );
    });

    it('should handle non-200 status codes', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                status: 404,
                statusText: 'Not Found',
                json: () => Promise.resolve({}),
            }),
        ) as jest.Mock;

        const { result } = renderHook(() => useFetch({ endpoint: 'test-endpoint' }));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toBeNull();
        expect(result.current.error?.message).toBe('HTTP error! status: Not Found');
        expect(result.current.error?.status).toBe(404);
    });
});
