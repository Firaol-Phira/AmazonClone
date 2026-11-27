import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const [{ user }] = useContext(DataContext);

  if (!user) {
    return <Navigate to="/auth" state={{ msg, redirect }} replace />;
  }

  return children;
};

export default ProtectedRoute;