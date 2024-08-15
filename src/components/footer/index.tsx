import CompanyLogo from '@assets/modsen-logo.svg';
import { Logo } from '@components/logo';

import style from './style.module.scss';

export const Footer = () => (
    <footer className={style.footer}>
        <div className={style.content_container}>
            <Logo isBlack={true} />
            <div className={style.company_logo}>
                <CompanyLogo />
            </div>
        </div>
    </footer>
);
