import React from "react";
import NotFoundPage from "../../Common/NotFoundPage";

const AdminGuard = ({ children }) => {
  const isAdmin = localStorage.getItem("access_token");

  if (!isAdmin) {
    return <NotFoundPage />;
  }

  return children; 
};

export default AdminGuard;
