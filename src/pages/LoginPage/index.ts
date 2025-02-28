import { lazy } from "react";

const LoginPage: React.LazyExoticComponent<React.ComponentType> = lazy(
  () => import("./LoginPage")
);

export default LoginPage;
