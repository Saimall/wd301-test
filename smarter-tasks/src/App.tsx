import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Notfound";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;