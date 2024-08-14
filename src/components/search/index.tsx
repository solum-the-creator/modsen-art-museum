import SearchIcon from '@assets/icons/search-icon.svg';

import styles from './style.module.scss';

export const Search = () => (
    <div className={styles.search_block}>
        <form className={styles.search_form}>
            <input
                type='text'
                placeholder='Search art, artist, work...'
                className={styles.search}
            />
            <div className={styles.search_icon}>
                <SearchIcon />
            </div>
        </form>
    </div>
);
