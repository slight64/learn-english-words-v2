import { lazy } from 'react';

const CreatePage: React.LazyExoticComponent<React.ComponentType> = lazy(
  () => import('./ui/create-page')
);

export default CreatePage;
