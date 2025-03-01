import { lazy } from 'react';

const CreatePage: React.LazyExoticComponent<React.ComponentType> = lazy(
  () => import('./create-page')
);

export default CreatePage;
