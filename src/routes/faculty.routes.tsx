import FacultyDashboard from "@pages/faculty/FacultyDashboard";
import FacultyOverview from "@pages/faculty/FacultyOverview";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDeviceHub } from "react-icons/md";
export const facultyPaths = [
  {
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Faculty Overview",
    icon: <MdOutlineDeviceHub />,
    path: "offered-courses",
    element: <FacultyOverview />,
  },
];
