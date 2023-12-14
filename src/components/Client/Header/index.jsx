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
          <div
            className="collapse navbar-collapse col-xl-9"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/post" className="nav-link">Post</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog Entries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="post-details.html">
                  Post Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
