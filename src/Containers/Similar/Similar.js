import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimilarCard from "../../Components/SimilarCard/SimilarCard";
import "./similar.css";

const Similar = () => {
  const params = useParams();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données de films en cours");
        }

        const data = await response.json();

        setSimilar(data.results);
        //console.log(data.results);
      } catch (error) {
        console.error("Erreur de récupération des données de films en cours:", error.message);
      }
    };

    fetchSimilar();
  }, [params.movieId]); 

  return (
    <div className="similar">
      <div className="title">
        <h2>Films similaires</h2>
      </div>
      <div className="similar-cards">
        {similar ? (
          similar.slice(0, 12).map((item) => <SimilarCard  similar={item} />)
        ) : (
          <p>Aucun film similaire trouvé</p>
        )}
      </div>
    </div>
  );
};

export default Similar;
