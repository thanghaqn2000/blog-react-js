import "./App.css";
import Home from "./components/Client/Home";
import Header from "./components/Client/Header";
import Footer from "./components/Client/Footer";
import ContentDetail from "./components/Client/Post/Detail";
import AdminPage from "./components/Admin/Home";
import AddPost from "./components/Admin/Post/Add";
import UpdateBlog from "./components/Admin/Post/Update";
import ListPost from "./components/Admin/Post/List";
import AdminGuard from "./components/Admin/Guard";
import NotFoundPage from "./components/Common/NotFoundPage";

import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";
import LoginAdmin from "./components/Admin/Login";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    // Kiểm tra nếu path chứa "admin", ẩn Header và load lại trang
    const currentPath = window.location.pathname;
    if(currentPath.includes("admin") && accessToken){
      setShowHeader(false);
    }
  }, [accessToken, navigate]);

  return (
    <div className="App">
      <ScrollToTop />
      {showHeader && <Header />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="content-detail/:postId" element={<ContentDetail />} />
          <Route path="/" element={<Home />}/>
          <Route path="/login_admin" element={<LoginAdmin />}/>
          <Route path="/admin" element={<AdminGuard><AdminPage /></AdminGuard>}>
            <Route path="add-post" element={<AddPost />} />
            <Route path="update-post/:postId" element={<UpdateBlog />} />
            <Route path="list-post" element={<ListPost />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
