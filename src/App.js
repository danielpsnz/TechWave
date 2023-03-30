import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import PostList from './components/PostList/PostList';
import PostPage from './pages/Post/PostPage';
import Home from './pages/Home/HomePage';
import About from './pages/About/AboutPage';

import Particle from "./components/Particle";

function App() {
  return (
    <div>
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Sidebar />
        </main>
        <Footer />
      </Router>
    </div>
    <Particle />
    </div>
  );
}

export default App;
