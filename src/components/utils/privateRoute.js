import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user: authUser } = useSelector((state) => state.auth);

  if (!authUser) {
    // return <Navigate to="login" state={{ from: history.location }} />;
  }
  return children;
};
