import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Dashboard from "../components/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
      {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        // Component: Dashboard,
      },
    ],
  },
]);

export default router


// import { createBrowserRouter } from "react-router-dom"; // Changed from "react-router" to "react-router-dom"
// import Root from "../pages/Root";
// import Login from "../components/auth/Login";
// import Registration from "../components/auth/Registration";
// import Dashboard from "../components/Dashboard";
// import PrivateRoutes from "./PrivateRoutes";

// // Make sure this file has a .jsx extension
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "registration",
//         element: <Registration />,
//       },
//       {
//         path: "dashboard",
//         element: (
//           <PrivateRoutes>
//             <Dashboard />
//           </PrivateRoutes>
//         ),
//       },
//     ],
//   },
// ]);

// export default router;