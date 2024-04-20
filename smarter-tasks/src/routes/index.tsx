<<<<<<< Updated upstream
import { createBrowserRouter, Navigate } from "react-router-dom";
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
>>>>>>> Stashed changes

import AccountLayout from "../layouts/account"
import ProtectedRoute from "./ProtectedRoutes"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
<<<<<<< Updated upstream
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout"
import Notfound from "../pages/Notfound";
=======
import Projects from "../pages/projects";
import Logout from "../pages/logout";
<<<<<<< Updated upstream
import NotFound from "../NotFound";
=======
<<<<<<< Updated upstream
import Notfound from "../pages/Notfound";
=======
import NotFound from "../NotFound";
import MemberContainer from "../pages/members/MemberContainer";
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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
        path: "members",
        element: <MemberContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":memberID",
            element: <>Show member details <Outlet /></>,
            children: [
              { index: true, element: <></> },
              {
                path: "members",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  { path: "new", element: <>Show Modal window to create a member</> },
                  {
                    path: ":memberID",
                    children: [{ index: true, element: <>Show Member Details</> }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
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