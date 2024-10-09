import "./Header.scss";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function handleScroll() {
  const scroll = window.scrollY;
  const header = document.querySelector("header");
  if (header) {
    if (scroll >= 250) {
      header.classList.add("background-header");
    } else {
      header.classList.remove("background-header");
    }
  }
}

function Header() {
  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container col-xl-12">
          <div className="logo col-xl-3">
            <NavLink
              to="/"
              className="navbar-brand"
            >
              <h2>
                Dtee Blog<em>.</em>
              </h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="logo col-xl-9">
          <ul class="text-xl ml-10 font-medium flex flex-col p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/admin" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent">Admin</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
