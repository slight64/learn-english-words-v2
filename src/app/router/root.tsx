import MainLayout from '@/app/MainLayout/MainLayout';
import CreatePage from '@/pages/CreatePage';
import HomePage from '@/pages/HomePage';
import LearnPage from '@/pages/LearnPage/LearnPage';
import LoginPage from '@/pages/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { wordsApi } from '@/pages/LearnPage/wordsApi';
import { store } from '../store/store';

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
        element: <LearnPage />,
        loader: () => {
          loadStore().then(async () => {
            store.dispatch(wordsApi.util.prefetch('getWords', undefined, {}));
          });

          return null;
        },
      },

      {
        path: 'create',
        element: <CreatePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
