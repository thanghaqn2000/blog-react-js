import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/content" element={<Content/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
