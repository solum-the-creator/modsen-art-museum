import { useDebounce } from '@hooks/use-debounce';
import { act, renderHook } from '@testing-library/react';

describe('useDebounce', () => {
    it('should initialize with the given value', () => {
        const { result } = renderHook(() => useDebounce('initial', 1000));

        expect(result.current).toBe('initial');
    });

    it('should update the debounced value after the specified delay', () => {
        jest.useFakeTimers();

        const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
            initialProps: { value: 'initial', delay: 1000 },
        });

        expect(result.current).toBe('initial');

        rerender({ value: 'updated', delay: 1000 });

        expect(result.current).toBe('initial');

        act(() => {
            jest.runAllTimers();
        });

        expect(result.current).toBe('updated');
    });
});
