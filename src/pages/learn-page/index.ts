import { ComponentType, lazy, LazyExoticComponent } from 'react';

const LearnPage: LazyExoticComponent<ComponentType> = lazy(
  () => import('./ui/learn-page')
);

export default LearnPage;
