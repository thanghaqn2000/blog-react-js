import "./App.css";
import Home from "./components/Client/Home";
import Header from "./components/Client/Header";
import Content from "./components/Client/Content";
import Footer from "./components/Client/Footer";
import ContentDetail from "./components/Client/ContentDetail";
import Post from "./components/Admin/Post";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-detail" element={<ContentDetail />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
