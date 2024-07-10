import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, NavLink, useMatch } from 'react-router-dom';
import { getMovieDetails } from '../../Api/api';
import './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const castMatch = useMatch('/movies/:movieId/cast');
  const reviewsMatch = useMatch('/movies/:movieId/reviews');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <nav>
        <NavLink to={`/movies/${movieId}/cast`} className="nav-link" activeClassName="active-link">Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className="nav-link" activeClassName="active-link">Reviews</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        {castMatch && <Cast />}
        {reviewsMatch && <Reviews />}
      </Suspense>
    </div>
  );
}

export default MovieDetails;
