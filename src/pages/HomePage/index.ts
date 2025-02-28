import { ComponentType, lazy, LazyExoticComponent } from "react";

const HomePage: LazyExoticComponent<ComponentType> = lazy(() => import("./HomePage"));

export default HomePage;
