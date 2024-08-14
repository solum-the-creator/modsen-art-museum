import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FavoritesIcon from '@assets/icons/bookmark-icon.svg';
import HomeIcon from '@assets/icons/home-icon.svg';
import { Logo } from '@components/logo';
import { UrlPaths } from '@constants/paths';

import style from './style.module.scss';

export const Header = () => {
    const isHome = useLocation().pathname === UrlPaths.HOME;

    return (
        <header className={style.header}>
            <div className={style.content_container}>
                <div className={style.logo_container}>
                    <Logo />
                </div>
                <nav className={style.nav}>
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
