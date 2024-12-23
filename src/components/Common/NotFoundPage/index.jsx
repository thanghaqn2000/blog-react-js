import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="mt-4 text-indigo-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
