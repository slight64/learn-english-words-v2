import MainLayout from '@/layouts/main-layout';
import CreatePage from '@/pages/create-page';
import ErrorPage from '@/pages/error-page/ui/error-page';
import HomePage from '@/pages/home';
import LearnPage from '@/pages/learn-page';
import NotFoundPage from '@/pages/not-found-page';
import WordPage from '@/pages/word-page';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected-route/protected-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'learn',
        element: (
          <ProtectedRoute>
            <LearnPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'learn/:id',
        element: <WordPage />,
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
      {
        path: 'not-found',
        element: <NotFoundPage />,
      },
    ],
  },
]);
