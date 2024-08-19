import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FavoritesIcon from '@assets/icons/bookmark-icon.svg';
import HomeIcon from '@assets/icons/home-icon.svg';
import { Logo } from '@components/logo';
import { UrlPaths } from '@constants/paths';

import style from './style.module.scss';

export const Header = () => {
    const isHome = useLocation().pathname === UrlPaths.HOME;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={style.header}>
            <div className={style.content_container}>
                <div className={style.logo_container}>
                    <Logo />
                </div>
                <button
                    type='button'
                    className={`${style.burger_icon} ${isMenuOpen ? style.burger_open : ''}`}
                    onClick={toggleMenu}
                    aria-label='toggle menu'
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`${style.nav} ${isMenuOpen ? style.nav_open : ''}`}>
                    <ul className={style.nav_list}>
                        {!isHome && (
                            <li className={style.nav_item}>
                                <NavLink to={UrlPaths.HOME} className={style.nav_link}>
                                    {({ isActive }) => (
                                        <React.Fragment>
                                            <HomeIcon />
                                            <span className={isActive ? style.active : ''}>
                                                Home
                                            </span>
                                        </React.Fragment>
                                    )}
                                </NavLink>
                            </li>
                        )}
                        <li className={style.nav_item}>
                            <NavLink to={UrlPaths.FAVORITES} className={style.nav_link}>
                                {({ isActive }) => (
                                    <React.Fragment>
                                        <FavoritesIcon />
                                        <span className={isActive ? style.active : ''}>
                                            Your Favorites
                                        </span>
                                    </React.Fragment>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
