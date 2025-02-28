import { lazy } from "react";

const CreatePage:React.LazyExoticComponent<React.ComponentType> = lazy(() => import("./CreatePage"))

export default CreatePage
