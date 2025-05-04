import { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

function PrivateRoutes({ children }) {
  const { authUser, authLoading } = use(AuthContext);


  if (authLoading) {
    return <Loading></Loading>
  }
  if (!authUser) {
    return <Navigate to={"/login"}></Navigate>;
  }

  

  

  return children;
}

export default PrivateRoutes;
