import NextIcon from '@assets/icons/next-icon.svg';
import PrevIcon from '@assets/icons/prev-icon.svg';

import style from './style.module.scss';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={style.pagination}>
            {currentPage > 1 && (
                <button
                    type='button'
                    onClick={handlePrevPage}
                    className={style.page_button}
                    aria-label='previous page'
                >
                    <PrevIcon />
                </button>
            )}

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={`page-${index + 1}`}
                    type='button'
                    onClick={() => handlePageChange(index + 1)}
                    className={style.page_button}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}

            {currentPage < totalPages && (
                <button
                    type='button'
                    onClick={handleNextPage}
                    className={style.page_button}
                    aria-label='next page'
                >
                    <NextIcon />
                </button>
            )}
        </div>
    );
};
