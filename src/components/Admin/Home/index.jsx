import Sidebar from "../Sidebar";
import "./Home.scss";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar></Sidebar>
      <div id="content" className="ms-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
            >
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
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default AdminPage;
