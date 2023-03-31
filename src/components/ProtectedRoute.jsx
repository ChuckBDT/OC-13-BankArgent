import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { logDetails } = useSelector((state) => state.auth);

  if (logDetails !== null && logDetails.status === 200) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default ProtectedRoute;
