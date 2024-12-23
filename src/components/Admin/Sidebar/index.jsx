import "./Sidebar.scss";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const setFullHeight = () => {
    const elements = document.querySelectorAll(".js-fullheight");
    elements.forEach((element) => {
      element.style.height = `${window.innerHeight}px`;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login_admin';
  };

  useEffect(() => {
    setFullHeight();
    window.addEventListener("resize", setFullHeight);

    const sidebarCollapse = document.getElementById("sidebarCollapse");
    const sidebar = document.getElementById("sidebar");

    const toggleSidebar = () => {
      sidebar.classList.toggle("active");
    };

    if (sidebarCollapse) {
      sidebarCollapse.addEventListener("click", toggleSidebar);
    }

    return () => {
      window.removeEventListener("resize", setFullHeight);
      if (sidebarCollapse) {
        sidebarCollapse.removeEventListener("click", toggleSidebar);
      }
    };
  }, []);

  return (
    <nav id="sidebar">
      <div className="p-4 pt-5">
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <NavLink to="/" className="navbar-brand dropdown-toggle">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/list-post" className="navbar-brand dropdown-toggle">
              List Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/add-post"
              className="navbar-brand dropdown-toggle"
            >
              Add Post
            </NavLink>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
          <div className="flex items-center justify-center py-2">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
