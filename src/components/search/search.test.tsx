import { useDebounce } from '@hooks/use-debounce';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Search } from '.';

jest.mock('@hooks/use-debounce');
const mockUseDebounce = useDebounce as jest.MockedFunction<typeof useDebounce<string>>;

describe('Search', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render input with the correct placeholder', () => {
        render(<Search placeholder='Search here...' />);

        const input = screen.getByPlaceholderText('Search here...');

        expect(input).toBeInTheDocument();
    });

    it('should call onChange with the correct value after debounce', async () => {
        mockUseDebounce.mockImplementation((value: string) => value);

        render(<Search onChange={mockOnChange} />);

        const input = screen.getByPlaceholderText('Search art, artist, work...');

        fireEvent.change(input, { target: { value: 'Mona Lisa' } });

        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith('Mona Lisa');
        });

        fireEvent.change(input, { target: { value: 'Starry Night' } });

        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith('Starry Night');
        });
    });

    it('should not call onChange for an invalid query (e.g., exceeding max length)', async () => {
        mockUseDebounce.mockImplementation((value: string) => value);

        render(<Search onChange={mockOnChange} />);

        const input = screen.getByPlaceholderText('Search art, artist, work...');

        fireEvent.change(input, { target: { value: 'a'.repeat(41) } });

        await waitFor(() => {
            expect(mockOnChange).not.toHaveBeenCalled();
        });
    });
});
