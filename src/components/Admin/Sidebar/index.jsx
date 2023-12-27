import AddPost from "../AddPost";
import "./Sidebar.scss";
import { useEffect } from 'react';


function Sidebar() {
  const setFullHeight = () => {
    const elements = document.querySelectorAll('.js-fullheight');
    elements.forEach(element => {
      element.style.height = `${window.innerHeight}px`;
    });
  };

  useEffect(() => {
    setFullHeight();
    window.addEventListener('resize', setFullHeight);

    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    
    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
    };

    if (sidebarCollapse) {
      sidebarCollapse.addEventListener('click', toggleSidebar);
    }

    return () => {
      window.removeEventListener('resize', setFullHeight);
      if (sidebarCollapse) {
        sidebarCollapse.removeEventListener('click', toggleSidebar);
      }
    };
  }, []);

  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
        <div className="p-4 pt-5">
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Pages
              </a>
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
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="content" className="ms-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-primary">
              <i className="fa fa-bars"></i>
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </nav>
        <AddPost></AddPost>
      </div>
    </div>
  );
}

export default Sidebar;
