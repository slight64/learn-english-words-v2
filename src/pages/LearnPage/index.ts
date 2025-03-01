import { ComponentType, lazy, LazyExoticComponent } from 'react';

const LearnPage: LazyExoticComponent<ComponentType> = lazy(
  () => import('./learn-page')
);

export default LearnPage;
