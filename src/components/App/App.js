import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink exact="true" to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
          <NavLink to="/movies" className="nav-link" activeClassName="active-link">Movies</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
