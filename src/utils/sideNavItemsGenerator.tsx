import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
export type TSideBar = {
  name?: string;
  path?: string;
  key?: string;
  label?: JSX.Element | string;
  icon?: ReactNode;
  children?: TSideBar[];
};
export const sideNavIiemsGenerator = (
  sidebarItems: TSideBar[],
  userRole: string
) => {
  const adminSideBar = sidebarItems.reduce(
    (acc: TSideBar[], { name, icon, path, children }) => {
      if (name && path) {
        acc.push({
          key: name,
          label: <NavLink to={`/${userRole}/${path}`}>{name}</NavLink>,
          icon: icon,
        });
      }
      if (children) {
        acc.push({
          key: name,
          label: name,
          icon: icon,
          children: children.map(({ name, icon, path }) => ({
            key: name,
            label: <NavLink to={`/${userRole}/${path}`}>{name}</NavLink>,
            icon: icon,
          })),
        });
      }

      return acc;
    },
    []
  );
  return adminSideBar;
};
