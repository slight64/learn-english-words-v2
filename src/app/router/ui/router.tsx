import { MainLayout } from '@/app/main-layout/ui/main-layout';
import { store } from '@/app/store/model/store';
import { wordsApi } from '@/entities/word/model/words-api';
import { ProtectedRoute } from '@/features/auth/protected-route/ui/protected-route';
import CreatePage from '@/pages/CreatePage';
import HomePage from '@/pages/home';
import LearnPage from '@/pages/LearnPage';
import NotFoundPage from '@/pages/not-found-page';
import { createBrowserRouter } from 'react-router-dom';

const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'learn',
        element: (
          <ProtectedRoute>
            <LearnPage />
          </ProtectedRoute>
        ),
        loader: () => {
          loadStore().then(async () => {
            store.dispatch(wordsApi.util.prefetch('getWords', undefined, {}));
          });
          return null;
        },
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
