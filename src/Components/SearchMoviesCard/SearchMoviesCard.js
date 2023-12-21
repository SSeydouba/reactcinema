// SearchMoviesCard.js
import "./searchmoviescard.css";
import React from 'react';
import { Link } from 'react-router-dom';

const SearchMoviesCard = ({ movie, searchterm }) => {
  return (
    <div className="movie-card">
      
      <Link to={`/search?q=${encodeURIComponent(searchterm)}/movie/${encodeURIComponent(movie.title)}`} className="movie-details-link">
      <img
        // src={`https://image.tmdb.org/t/p/w500/${movieArr.poster_path}`}
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        className="cardImg"
        alt={movie.original_title}
      />
      </Link>
    </div>
  );
};

export default SearchMoviesCard;
