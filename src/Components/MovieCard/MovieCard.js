import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./moviecard.css"; // Assurez-vous que le chemin d'importation est correct
import Actor from "../../Containers/Actor/Actor";

const MovieCard = (props) => {
  const movieArr = props.movie;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`movie-card ${isHovered ? "hovered" : ""}`}
      id="fiche"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/movie/${movieArr.id}`}>
        <div className="Card">
          <img
            // src={`https://image.tmdb.org/t/p/w500/${movieArr.poster_path}`}
            src={"https://image.tmdb.org/t/p/w500/" + movieArr.poster_path}
            className="cardImg"
            alt={movieArr.original_title}
          />
          {isHovered && (
            
            <div className="movie-title">
              {/* Contenu du titre */}
              {movieArr.title}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
