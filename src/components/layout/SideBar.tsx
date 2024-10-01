import { sideNavitemsGenerator } from "@utils/sideNavItemsGenerator";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import React from "react";
import { useAppSelector } from "redux/hooks";
import { adminPaths } from "routes/admin.routes";
import { facultyPaths } from "routes/faculty.routes";
import { studentPaths } from "routes/student.routes";

type TSideBarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ collapsed, setCollapsed }: TSideBarProps) => {
  const { user: { role = "" } = {} } = useAppSelector(
    (state) => state?.auth
  ) as { user: { role: string } };
  const user = role.toLowerCase();

  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  //role-based sidebar

  let sidebarItems;
  switch (user) {
    case userRole.ADMIN:
      sidebarItems = sideNavitemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sideNavitemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sideNavitemsGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      collapsedWidth={85}
      width={250}
    >
      <div className="h-[5rem] text-center text-white flex items-center justify-center">
        EDU PORTAL
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["Dashboard"]}
        items={sidebarItems as ItemType<MenuItemType>[]}
        // Add 'as ItemType<MenuItemType>[]' to cast the 'adminSideBar' array to the correct type
      />
    </Sider>
  );
};

export default SideBar;
