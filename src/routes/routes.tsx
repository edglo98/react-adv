import { lazy, LazyExoticComponent } from "react";

type RouteElement = () => JSX.Element;

interface Route {
    path: string;
    Component: 
      | LazyExoticComponent<RouteElement>
      | RouteElement
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../LazyLoad01/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../LazyLoad01/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../LazyLoad01/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy 1',
  },
  {
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy 2',   
  },
  {
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy 3',    
  }
]