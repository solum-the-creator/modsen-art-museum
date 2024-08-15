import { Footer } from '@components/footer';
import { Header } from '@components/header';

import style from './style.module.scss';

type LayoutProps = {
    children: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => (
    <div className={style.layout}>
        <Header />
        <main className={style.main}>{children}</main>
        <Footer />
    </div>
);
