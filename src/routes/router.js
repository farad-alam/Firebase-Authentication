import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path:"login",
        Component: Login,
      },
      {
        path:"registration",
        Component: Registration,
      }
    ]
    
  }
]);

export default router