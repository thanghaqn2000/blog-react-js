import "./App.css";
import Home from "./components/Client/Home";
import Header from "./components/Client/Header";
import Footer from "./components/Client/Footer";
import ContentDetail from "./components/Client/ContentDetail";
import AdminPage from "./components/Admin/AdminPage";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/content-detail" element={<ContentDetail />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
