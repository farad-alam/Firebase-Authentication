import { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

function PrivateRoutes({ children }) {
  const { authUser, authLoading } = use(AuthContext);
  const location = useLocation()


  if (authLoading) {
    return <Loading></Loading>
  }
  if (!authUser) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  

  

  return children;
}

export default PrivateRoutes;
