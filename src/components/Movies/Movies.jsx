import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../../Api/api';
import './Movies.module.css';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = e => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
    navigate({ ...location, search: `query=${query}` });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
