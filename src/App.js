import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentDetail from "./components/ContentDetail";

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
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
