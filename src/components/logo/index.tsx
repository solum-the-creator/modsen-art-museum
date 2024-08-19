import { Link } from 'react-router-dom';
import LogoImg from '@assets/logo.svg?url';
import BlackLogoImg from '@assets/logo-black.svg?url';
import { UrlPaths } from '@constants/paths';

import style from './style.module.scss';

type LogoProps = {
    isBlack?: boolean;
};

export const Logo = ({ isBlack }: LogoProps) => (
    <Link to={UrlPaths.HOME}>
        <div className={style.logo}>
            <img src={isBlack ? BlackLogoImg : LogoImg} alt='Museum of Art' />
        </div>
    </Link>
);
