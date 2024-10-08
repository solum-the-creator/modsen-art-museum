import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from '@context/favorites-context';
import { AppRoutes } from '@routes/routes';

import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FavoritesProvider>
                <AppRoutes />
            </FavoritesProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
