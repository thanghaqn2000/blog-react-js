import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import AdminGuard from "./components/Admin/Guard";
import AdminPage from "./components/Admin/Home";
import AddPost from "./components/Admin/Post/Add";
import ListPost from "./components/Admin/Post/List";
import UpdateBlog from "./components/Admin/Post/Update";
import Footer from "./components/Client/Footer";
import Header from "./components/Client/Header";
import Home from "./components/Client/Home";
import ContentDetail from "./components/Client/Post/Detail";
import NotFoundPage from "./components/Common/NotFoundPage";

import LoginAdmin from "./components/Admin/Login";
import LoginClient from "./components/Client/Login";
import Register from "./components/Client/Register";
import ScrollToTop from "./components/Common/ScrollToTop";
import { useAuth } from "./context/AuthContex";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setNavigator } = useAuth();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate, setNavigator]);

  return children;
};

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <div style={{ flex: 1 }}>
        <AuthWrapper>
          <Routes>
            <Route path="content-detail/:postId" element={<ContentDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/login_admin" element={<LoginAdmin />} />
            <Route
              path="/admin"
              element={
                <AdminGuard>
                  <AdminPage />
                </AdminGuard>
              }
            >
              <Route path="add-post" element={<AddPost />} />
              <Route path="update-post/:postId" element={<UpdateBlog />} />
              <Route path="list-post" element={<ListPost />} />
            </Route>
            <Route path="*" element={<Navigate to="/not_found" />} />
            <Route path="/not_found" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginClient />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthWrapper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
