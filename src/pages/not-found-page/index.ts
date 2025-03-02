import { ComponentType, lazy, LazyExoticComponent } from 'react';

const NotFoundPage: LazyExoticComponent<ComponentType> = lazy(
  () => import('./ui/not-found-page')
);

export default NotFoundPage;
