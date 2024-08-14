import { Route, Routes } from 'react-router-dom';
import { UrlPaths } from '@constants/paths';
import { DetailInfo } from '@pages/detail-info';
import { Favorites } from '@pages/favorites';
import { Home } from '@pages/home';

export const AppRoutes = () => (
    <Routes>
        <Route path={UrlPaths.HOME} element={<Home />} />
        <Route path={UrlPaths.FAVORITES} element={<Favorites />} />
        <Route path={UrlPaths.DETAIL_INFO} element={<DetailInfo />} />
    </Routes>
);
