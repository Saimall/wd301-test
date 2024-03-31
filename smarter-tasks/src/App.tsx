import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
      {
        path: "*",
        element: <NotFound />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;