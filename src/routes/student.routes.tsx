import FacultyOverview from "@pages/faculty/FacultyOverview";
import StudentDashboard from "@pages/student/StudentDashboard";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDeviceHub } from "react-icons/md";
export const studentPaths = [
  {
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Overview",
    icon: <MdOutlineDeviceHub />,
    path: "offered-courses",
    element: <FacultyOverview />,
  },
];
