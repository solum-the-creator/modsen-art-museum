import SearchIcon from '@assets/icons/search-icon.svg';

import styles from './style.module.scss';

type SearchProps = {
    onChange?: (value: string) => void;
    placeholder?: string;
};

export const Search = ({ onChange, placeholder = 'Search art, artist, work...' }: SearchProps) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={styles.search_block}>
            <form className={styles.search_form}>
                <input
                    type='text'
                    placeholder={placeholder}
                    onChange={handleSearchChange}
                    className={styles.search}
                />
                <div className={styles.search_icon}>
                    <SearchIcon />
                </div>
            </form>
        </div>
    );
};
