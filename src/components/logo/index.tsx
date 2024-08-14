import { Link } from 'react-router-dom';
import logo from '@assets/logo.svg';
import blackLogo from '@assets/logo-black.svg';
import { UrlPaths } from '@constants/paths';

import style from './style.module.scss';

type LogoProps = {
    isBlack?: boolean;
};

export const Logo = ({ isBlack }: LogoProps) => (
    <Link to={UrlPaths.HOME}>
        <div className={style.logo}>
            <img src={isBlack ? blackLogo : logo} alt='Museum of Art' />
        </div>
    </Link>
);
