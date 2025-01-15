import "./Header.scss";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faRightToBracket, faAddressCard,
  faHandshake, faCircleInfo, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Anchor from "../../Items/Anchor";

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
function HeaderUp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div className="header-up">
      <nav className="navbar navbar-expand-lg">
        <div className="container col-xl-12">
          <div className="logo col-xl-3 flex items-center justify-between">
            <NavLink to="/" className="navbar-brand">
              <h2>
                LOGO<em>.</em>
              </h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="flex items-center justify-center text-white text-[18px] leading-[30px]">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
          </div>
          <div
            className={`navbar-collapse col-xl-6 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-header-down" onClick={closeNavbar}>
                <NavLink to="/admin" className="nav-link">
                  <FontAwesomeIcon icon={faCircleInfo} className="pr-2" />
                  Về chúng tôi
                </NavLink>
              </li>
              <li className="nav-header-down" onClick={closeNavbar}>
                <a className="nav-link" href="about.html">
                  <FontAwesomeIcon icon={faAddressCard} className="pr-2" />
                  Hướng dẫn mở tài khoản
                </a>
              </li>
              <li className="nav-header-down" onClick={closeNavbar}>
                <a className="nav-link" href="blog.html">
                  <FontAwesomeIcon icon={faHandshake} className="pr-2" />
                  Cộng tác
                </a>
              </li>
              <li className="nav-header-down" onClick={closeNavbar}>
                <a className="nav-link" href="post-details.html">
                  <FontAwesomeIcon icon={faRightToBracket} className="pr-2" />
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
function HeaderBottom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <div className="header-bot">
      <nav className="navbar-expand-lg bg-[#004370]">
        <div className="flex justify-between items-center p-4 lg:hidden">
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } justify-center`}
          id="navbarResponsive"
        >
          <ul
            className="navbar-nav gap-x-5 text-white py-2 px-2 display-block font-bold text-lg"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li className="relative">
              <Anchor href="#"
                klassName="text-white font-black"
                text="Trang chủ"
                variant="primary"
                size="lg"
                />
            </li>
            <li className="relative">
              <Anchor href="#"
                klassName="text-white font-black"
                text="Tin tức"
                variant="primary"
                size="lg"
                />
            </li>
            <li className="relative">
              <Anchor href="#"
                klassName="text-white font-black"
                text="Danh mục đầu tư"
                variant="primary"
                size="lg"
                />
            </li>
            <li className="relative group">
              <Anchor
                href="#"
                klassName="text-white font-black"
                text="Khóa học"
                variant="primary"
                size="lg"
                icon={faChevronDown}
                iconPosition="right"
              />
              <div
                className="hidden group-hover:block absolute bg-[#004370] z-10 
                          divide-y divide-gray-100 rounded-lg shadow left-1/2 
                          -translate-x-1/2 w-max"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-white">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      Phân tích cơ bản - thực chiến
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Phân tích kỹ thuật - thực chiến
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Anchor
                href="#"
                klassName="text-white font-black"
                text="Kinh nghiệm đầu tư"
                variant="primary"
                size="lg"
                icon={faChevronDown}
                iconPosition="right"
              />
              <div
                className="hidden group-hover:block absolute bg-[#004370] z-10 
                          divide-y divide-gray-100 rounded-lg shadow left-1/2 
                          -translate-x-1/2 w-max"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-white">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Kinh nghiệm phân tích
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Anchor
                href="#"
                klassName="text-white font-black"
                text="Sản phẩm"
                variant="primary"
                size="lg"
                icon={faChevronDown}
                iconPosition="right"
              />
              <div
                className="hidden group-hover:block absolute bg-[#004370] z-10 
                          divide-y divide-gray-100 rounded-lg shadow left-1/2 
                          -translate-x-1/2 w-max"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-white">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      AI - Tín hiệu đầu tư
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Tư vấn đầu tư
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Baó cáo đầu tư
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <Anchor href="#"
                klassName="text-white font-black"
                text="Liên hệ"
                variant="primary"
                size="lg"
                />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
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
      <HeaderUp/>
      <HeaderBottom/>
    </header>
  );
}

export default Header;
