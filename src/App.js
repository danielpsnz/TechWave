import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import Post from './pages/Post';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={Post} />
            <Route path="/about" component={About} />
          </Switch>
          <Sidebar />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
