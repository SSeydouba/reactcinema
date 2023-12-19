import "./movie.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Actor from "../Actor/Actor";
import Similar from "../Similar/Similar";
import Nav from "../Nav/Nav";

const Movie = () => {
  const params = useParams();
  const [thisMovie, setThisMovie] = useState(null);
  
const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1`
      );

      if (!response) {
        throw new Error("Erreur lors de la récupération des données");
      }

      const dataJson = await response.json();
      setThisMovie(dataJson);
    } catch (error) {
      console.error("Erreur de récupération des données:", error.message);
    }
  };

 
  
  useEffect(() => {
    fetchData();
  }, [params.movieId]);

  return (
    <div className="movie">
      {thisMovie ? (
        <div className="movie-content">

          {/* inclusion nav */}
          <Nav nav={thisMovie} />

          <div className="card-title">
            <MovieCard movie={thisMovie} className="movie-card" />
            <div className=" title">
              <div>
                Date de sortie: le &nbsp; 
                {new Date(thisMovie.release_date).toLocaleDateString("fr-FR")}
              </div>
              <div>Casting John Cena, Alison Brie, Juan Pablo Raba, Alice Eve, ...</div>             
              <br/>
              <div>Durée: {thisMovie.runtime} min</div>
              <div>
                <br/>
                <div>Synopsis et détails</div>
                <br/>
                {thisMovie.overview}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
      {/* Inclusion des composants Actor et Similar */}
      <Actor />
      <Similar />

    </div>
  );
};

export default Movie;
