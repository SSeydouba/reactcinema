// SearchMovies.js
import "./searchmovies.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchMoviesCard from '../../Components/SearchMoviesCard/SearchMoviesCard';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '4d12b2b226af3e650897e7b25db29466';
  const language = 'fr-FR';
  const page = 1;

  const location = useLocation();
  const searchterm = new URLSearchParams(location.search).get('q') || '';

  const navigate = useNavigate();

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${page}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = () => {
    // Mettre à jour l'URL avec le paramètre de recherche
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    // Exécuter la recherche lors du changement du paramètre searchterm
    searchMovies();
  }, [searchterm]);

  return (
    <div className="search-container">
     
      <div className="content-searh">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search" placeholder="Rechercher un film"
        />
        <button onClick={handleSearch}>OK</button>
      </div>
      {searchterm && (
        <div className="movie-list">
          {searchResults.map((movie) => (
            <SearchMoviesCard key={movie.id} movie={movie}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
