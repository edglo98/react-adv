import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../LazyLoad01/pages/NoLazy";

type RouteElement = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    Component: 
      | LazyExoticComponent<RouteElement>
      | RouteElement
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../LazyLoad01/layout/LazyLayout"));

export const routes: Route[] = [
  {
    path: '/lazylayout/*',
    to: '/lazylayout',
    Component: LazyLayout,
    name: 'Lazy layout',    
  },
  {
    path: '/nolazy',
    to: '/nolazy',
    Component: NoLazy,
    name: 'no lazy',    
  }
]