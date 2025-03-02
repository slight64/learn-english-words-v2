import { lazy } from 'react';

const HomePage: React.LazyExoticComponent<React.ComponentType> = lazy(
  () => import('./ui/home-page')
);

export default HomePage;
