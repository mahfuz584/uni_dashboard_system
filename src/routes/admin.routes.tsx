import AcademicDept from "@pages/admin/academicManagemnt/AcademicDept";
import AcademicFaculty from "@pages/admin/academicManagemnt/AcademicFaculty";

import AcademicSemester from "@pages/admin/academicManagemnt/AcademicSemester";

import AdminDashboard from "@pages/admin/AdminDashboard";
import CreateAdmin from "@pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "@pages/admin/userManagement/CreateFaculty";
import CreateStudent from "@pages/admin/userManagement/CreateStudent";
import Test from "@pages/Test";
import TestThree from "@pages/TestThree";
import TestTwo from "@pages/TestTwo";
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
      {
        name: "Academic Faculty",
        icon: <FaElementor />,
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Academic Department",
        icon: <FaElementor />,
        path: "academic-department",
        element: <AcademicDept />,
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
  {
    name: "Test",
    icon: <PiStudentBold />,
    path: "test",
    element: <Test />,
  },
  {
    name: "Test-2",
    icon: <PiStudentBold />,
    path: "test-2",
    element: <TestTwo />,
  },
  {
    name: "Test-3",
    icon: <PiStudentBold />,
    path: "test-3",
    element: <TestThree />,
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
