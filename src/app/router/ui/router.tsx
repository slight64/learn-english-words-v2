import { MainLayout } from '@/app/main-layout/ui/main-layout';
import { store } from '@/app/store/model/store';
import { wordsApi } from '@/entities/word/model/words-api';
import { ProtectedRoute } from '@/features/auth/protected-route/ui/protected-route';
import { PublicRoute } from '@/features/auth/public-route/ui/public-route';
import CreatePage from '@/pages/CreatePage';
import { HomePage } from '@/pages/home/ui/home-page';
import LearnPage from '@/pages/LearnPage';
import LoginPage from '@/pages/LoginPage';
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
            console.log('prefetch');
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
    ],
  },
  {
    path: 'login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
