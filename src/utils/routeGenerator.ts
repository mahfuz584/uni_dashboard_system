import { ReactNode } from "react";

type TRoute = {
    path?: string;
    element?: ReactNode;
    children?: TRoute[];
  };
  
export const routeGenerator = (routes : TRoute[]) => {
     const genericRoutes = routes.reduce(
        (acc: TRoute[], { path, element, children }) => {
          if (path && element) {
            acc.push({
              path: path,
              element: element,
            });
          }
          if (children) {
            children.forEach(({ path, element }) => {
              acc.push({
                path: path,
                element: element,
              });
            });
          }
      
          return acc;
        },
        []
      );
      return genericRoutes;
}