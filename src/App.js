import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Content from './components/Content';

import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/content" element={<Content/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
