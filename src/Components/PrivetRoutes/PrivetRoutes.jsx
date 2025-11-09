import React, { useContext } from "react";
import AuthContext from "../../Contaxt/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};

export default PrivetRoutes;
