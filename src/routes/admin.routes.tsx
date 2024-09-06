import AcademicSemester from "@pages/admin/AcademicSemester";
import AdminDashboard from "@pages/admin/AdminDashboard";
import CreateAdmin from "@pages/admin/CreateAdmin";
import CreateFaculty from "@pages/admin/CreateFaculty";
import CreateStudent from "@pages/admin/CreateStudent";
import { FaChalkboardTeacher, FaElementor } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiUnacademy } from "react-icons/si";

// export type TRoute = {
//   path?: string;
//   element?: ReactNode;
//   children?: TRoute[];
// };

// export type TSideBar = {
//   key?: string;
//   label?: JSX.Element | string;
//   icon?: ReactNode;
//   children?: TSideBar[];
// };
export const adminPaths = [
  {
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    icon: <SiUnacademy />,
    children: [
      {
        name: "Academic Semester",
        icon: <FaElementor />,
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    icon: <MdManageAccounts />,
    children: [
      {
        name: "Create Admin",
        icon: <GrUserAdmin />,
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        icon: <FaChalkboardTeacher />,
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        icon: <PiStudentBold />,
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//admin routes
// export const adminRoutes = adminPaths.reduce(
//   (acc: TRoute[], { path, element, children }) => {
//     if (path && element) {
//       acc.push({
//         path: path,
//         element: element,
//       });
//     }
//     if (children) {
//       children.forEach(({ path, element }) => {
//         acc.push({
//           path: path,
//           element: element,
//         });
//       });
//     }

//     return acc;
//   },
//   []
// );

//admin sidebar
// export const adminSideBar = adminPaths.reduce(
//   (acc: TSideBar[], { name, icon, path, children }) => {
//     if (name && path) {
//       acc.push({
//         key: name,
//         label: <NavLink to={`/admin/${path}`}>{name}</NavLink>,
//         icon: icon,
//       });
//     }
//     if (children) {
//       acc.push({
//         key: name,
//         label: name,
//         icon: icon,
//         children: children.map(({ name, icon, path }) => ({
//           key: name,
//           label: <NavLink to={`/admin/${path}`}>{name}</NavLink>,
//           icon: icon,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );
