import { ComponentType, lazy, LazyExoticComponent } from "react";

const LearnPage: LazyExoticComponent<ComponentType> = lazy(() => import("./LearnPage"));

export default LearnPage;
