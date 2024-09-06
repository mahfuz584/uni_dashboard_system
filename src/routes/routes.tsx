import App from "App";
import { createBrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import { routeGenerator } from "@utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // Admin routes
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  //Faculty routes
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  //Student routes
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "login",
    element: <Login />,
  },
]);
export default router;
