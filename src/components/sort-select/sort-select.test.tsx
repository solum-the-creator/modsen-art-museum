import { fireEvent, render, screen } from '@testing-library/react';

import { SortSelect } from '.';

describe('SortSelect', () => {
    const mockOnChange = jest.fn();

    const renderComponent = () => render(<SortSelect onChange={mockOnChange} />);

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('should render the select with default option selected', () => {
        renderComponent();

        const selectElement = screen.getByLabelText(/sort by/i) as HTMLSelectElement;

        expect(selectElement).toBeInTheDocument();
        expect(selectElement.value).toBe('default');
    });

    it('should call onChange with the correct value when a different option is selected', () => {
        renderComponent();

        const selectElement = screen.getByLabelText(/sort by/i);

        mockOnChange.mockClear();

        fireEvent.change(selectElement, { target: { value: 'title_asc' } });
        expect(mockOnChange).toHaveBeenCalledWith('title_asc');

        mockOnChange.mockClear();

        fireEvent.change(selectElement, { target: { value: 'artist_title_desc' } });
        expect(mockOnChange).toHaveBeenCalledWith('artist_title_desc');
    });
});
