import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import AccountLayout from "../layouts/account"
import ProtectedRoute from "./ProtectedRoutes"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout"
import Notfound from "../pages/Notfound";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  { 
    path: "/logout", 
    element: <Logout /> 
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <>Show project details <Outlet /></>,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  { path: "new", element: <>Show Modal window to create a task</> },
                  {
                    path: ":taskID",
                    children: [{ index: true, element: <>Show Task Details</> }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
  {
    path: "/notfound",
    element: (<Notfound />)
  },
  {
    path: "*",
    element: <Navigate to={"/notfound"} replace />
  }
]);

export default router;