import { fireEvent, render, screen } from '@testing-library/react';

import { Pagination } from '.';

describe('Pagination', () => {
    const onPageChange = jest.fn();

    beforeEach(() => {
        onPageChange.mockClear();
    });

    it('should render the correct number of page buttons', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

        const pageButtons = screen.getAllByRole('button');

        expect(pageButtons).toHaveLength(7);
    });

    it('should disable the current page button', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

        const currentPageButton = screen.getByText('2');

        expect(currentPageButton).toBeDisabled();
    });

    it('should call onPageChange with the correct page number when a page button is clicked', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

        const page3Button = screen.getByText('3');

        fireEvent.click(page3Button);

        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('should call onPageChange with the previous page when the prev button is clicked', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

        const prevButton = screen.getByLabelText('previous page');

        fireEvent.click(prevButton);

        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('should call onPageChange with the next page when the next button is clicked', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

        const nextButton = screen.getByLabelText('next page');

        fireEvent.click(nextButton);

        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('should not render the prev button on the first page', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);

        const prevButton = screen.queryByLabelText('previous page');

        expect(prevButton).toBeNull();
    });

    it('should not render the next button on the last page', () => {
        render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);

        const nextButton = screen.queryByLabelText('next page');

        expect(nextButton).toBeNull();
    });
});
