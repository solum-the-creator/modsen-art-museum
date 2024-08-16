import ErrorBoundary from '@components/error-boundary';
import { Search } from '@components/search';

import { PictureGrid } from './picture-grid';
import { PictureList } from './picture-list';

import style from './style.module.scss';

export const Home = () => (
    <div className={style.home}>
        <section className={style.search_block}>
            <h1 className={style.title}>
                Let&apos;s Find Some <span className={style.highlight}>Art</span> Here!
            </h1>
            <Search />
        </section>
        <section className={style.home_section}>
            <div className={style.text_block}>
                <h3 className={style.subtitle}>Topics for you</h3>
                <h2 className={style.title}>Our special gallery</h2>
            </div>
            <ErrorBoundary fallback={<p>Something went wrong.</p>}>
                <PictureList />
            </ErrorBoundary>
        </section>
        <section className={style.home_section}>
            <div className={style.text_block}>
                <h3 className={style.subtitle}>Here some more</h3>
                <h2 className={style.title}>Other works for you</h2>
            </div>
            <ErrorBoundary fallback={<p>Something went wrong.</p>}>
                <PictureGrid />
            </ErrorBoundary>
        </section>
    </div>
);
