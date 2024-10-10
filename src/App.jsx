import "./App.css";
import Home from "./components/Client/Home";
import Header from "./components/Client/Header";
import Footer from "./components/Client/Footer";
import ContentDetail from "./components/Client/Post/Detail";
import AdminPage from "./components/Admin/Home";
import AddPost from "./components/Admin/Post/Add";
import UpdateBlog from "./components/Admin/Post/Update";
import ListPost from "./components/Admin/Post/List";


import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";


function App() {
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu path chứa "admin", ẩn Header và load lại trang
    const currentPath = window.location.pathname;
    setShowHeader(!currentPath.includes("admin"));

    // if (currentPath.includes("admin")) {
    //   navigate("/admin"); // Điều hướng đến "/admin" và load lại trang
    // }
  }, [navigate]);

  return (
    <div className="App">
      <ScrollToTop />
      {showHeader && <Header />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="content-detail/:postId" element={<ContentDetail />} />
          <Route path="/" element={<Home />}/>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="add-post" element={<AddPost />} />
            <Route path="update-post/:postId" element={<UpdateBlog />} />
            <Route path="list-post" element={<ListPost />} />
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
