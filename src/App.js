import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Book from './components/books/Book';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Navbar />
       <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Book} />
        <Route path="/about" component={About} />
       </div>
    </Router>
  );
}

export default App;
