import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-red-700 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-4xl font-bold text-gray-500 dark:text-gray-400">
            Chúng tôi không tìm thấy trang này
          </p>
          <NavLink to={"/"} className="text-xl text-blue-700 inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Trở về trang chủ
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
