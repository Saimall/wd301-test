/* eslint-disable @typescript-eslint/no-unused-vars */
// import Signup from "./pages/signup";
// import Signin from "./pages/signin";
// import HomePage from "./pages/HomePage";
// import ProtectedRoute from "./ProtectedRoute";
// import NotFound from "./pages/Notfound";
// import Dashboard from "./pages/dashboard";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import {ThemeContext} from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <NotFound />
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "home",
//         element: <HomePage />,
//       }
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />
//   }
// ]);



const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  )
}
export default App;