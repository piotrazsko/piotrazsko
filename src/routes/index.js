import { Home } from "containers";

export const redirectAuthPath = "/auth";

//* layout used for   set layouts for pages
//* if layout ===  false   we use page without layout
//* if layout is  react elemen - we use it
const mainRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
    isPrivate: true,
    showHeader: true,
    header: true,
    // layout: Tutorial,
  },
];
export default [].concat(mainRoutes);
