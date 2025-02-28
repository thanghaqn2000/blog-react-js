import {
  faAddressCard,
  faBars,
  faChevronDown,
  faCircleInfo,
  faGear,
  faHandshake,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContex";
import Anchor from "../../Items/Anchor";
import "./Header.scss";

function UserProfile({ logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();
    logout();
    toast.success("Đăng xuất thành công!");
    navigate("/login");
  };

  return (
    <div className="user-profile">
      <div
        className="relative inline-flex items-center justify-center w-10 aspect-square bg-blue-500 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faUser}
          size="lg"
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <ul
          role="menu"
          data-popover="profile-menu"
          data-popover-placement="bottom"
          className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
        >
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <FontAwesomeIcon icon={faGear} />
            <p className="text-slate-800 font-medium ml-2">Hồ sơ của tôi</p>
          </li>

          <hr className="my-2 border-slate-200" role="menuitem" />
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            onClick={logoutUser}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p className="text-slate-800 font-medium ml-2">Đăng xuất</p>
          </li>
        </ul>
      )}
    </div>
  );
}
function HeaderUp() {
  const { user, logout, isAuthChecked } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  if (!isAuthChecked) {
    return null;
  }

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
                <NavLink to="/admin" className="nav-link">
                  <FontAwesomeIcon icon={faAddressCard} className="pr-2" />
                  Hướng dẫn mở tài khoản
                </NavLink>
              </li>
              <li className="nav-header-down" onClick={closeNavbar}>
                <NavLink className="nav-link" to="/admin">
                  <FontAwesomeIcon icon={faHandshake} className="pr-2" />
                  Cộng tác
                </NavLink>
              </li>
              {user ? (
                <li className="nav-header-down" onClick={closeNavbar}>
                  <UserProfile logout={logout} className="nav-link" />
                </li>
              ) : (
                <li className="nav-header-down" onClick={closeNavbar}>
                  <NavLink className="nav-link" to="/login">
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className="pr-2"
                    />
                    Đăng nhập
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function HeaderBottom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header-bot">
      <nav className="navbar-expand-lg bg-[#004370]">
        <div className="flex justify-between items-center p-4 lg:hidden">
          <button className="text-white text-2xl" onClick={toggleMenu}>
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
              <Anchor
                href="/admin"
                klassName="text-white font-black"
                text="Trang chủ"
                variant="primary"
                size="lg"
              />
            </li>
            <li className="relative">
              <Anchor
                href="/admin"
                klassName="text-white font-black"
                text="Tin tức"
                variant="primary"
                size="lg"
              />
            </li>
            <li className="relative">
              <Anchor
                href="#"
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
                    <NavLink
                      to="/admin"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      Phân tích cơ bản - thực chiến
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Phân tích kỹ thuật - thực chiến
                    </NavLink>
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
                    <NavLink
                      to="/"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      Câu hỏi thường gặp
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Kinh nghiệm phân tích
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Anchor
                href="/"
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
                    <NavLink
                      to="/"
                      className="block px-4 py-2 border-b-2 hover:bg-white hover:text-black"
                    >
                      AI - Tín hiệu đầu tư
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Tư vấn đầu tư
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 hover:bg-white hover:text-black"
                    >
                      Baó cáo đầu tư
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <Anchor
                href="#"
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
  return (
    <header className="">
      <HeaderUp />
      <HeaderBottom />
    </header>
  );
}

export default Header;
