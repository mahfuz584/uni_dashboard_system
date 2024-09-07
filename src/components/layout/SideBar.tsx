import { sideNavIiemsGenerator } from "@utils/sideNavItemsGenerator";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useAppSelector } from "redux/hooks";
import { adminPaths } from "routes/admin.routes";
import { facultyPaths } from "routes/faculty.routes";
import { studentPaths } from "routes/student.routes";

const SideBar = ({ collapsed }: { collapsed: boolean }) => {
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
      sidebarItems = sideNavIiemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sideNavIiemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sideNavIiemsGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider
      collapsedWidth={120}
      width={250}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div
        style={{
          height: "5rem",
          textAlign: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        EDU PORTAL
      </div>
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
