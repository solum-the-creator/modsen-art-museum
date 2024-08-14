import FavoriteIcon from '@assets/icons/bookmark-icon.svg';

import style from './style.module.scss';

type FavoriteButtonProps = {
    onClick?: () => void;
    isDisabled?: boolean;
};

export const FavoriteButton = ({ onClick, isDisabled }: FavoriteButtonProps = {}) => (
    <button
        onClick={onClick}
        disabled={true}
        type='button'
        className={style.favorite_button}
        aria-label='Add to Favorites'
    >
        <FavoriteIcon />
    </button>
);
