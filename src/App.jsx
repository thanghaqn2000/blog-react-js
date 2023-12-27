import "./App.css";
import Home from "./components/Client/Home";
import Header from "./components/Client/Header";
import Footer from "./components/Client/Footer";
import ContentDetail from "./components/Client/ContentDetail";
import UpdateBlog from "./components/Admin/UpdatePost";
import AdminPage from "./components/Admin/AdminPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header/>
        {/* <ScrollToTop/> */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content-detail/:postId" element={<ContentDetail />} />
            <Route path="/update-post/:postId" element={<UpdateBlog />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default App;
