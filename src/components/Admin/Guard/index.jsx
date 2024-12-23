import React from "react";
import { Navigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const isAdmin = localStorage.getItem("access_token");

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children; 
};

export default AdminGuard;
