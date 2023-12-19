import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorCard from "../../Components/ActorCard/ActorCard";
import "./actor.css";

const Actor = () => {
  const params = useParams();
  const [credits, setCredits] = useState([]);
  const [thisActor, setThisActor] = useState(null);
  const [thisPerson, setThisPerson] = useState(null);

  const fetchCredits = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de films en cours");
      }
      const dataCredits = await response.json();
      setCredits(dataCredits.cast);
    } catch (error) {
      console.error("Erreur de récupération des données de films en cours:", error.message);
    }
  };

  const fetchActor = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${params.actorId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'acteur en cours");
      }
      const dataActor = await response.json();
      setThisActor(dataActor);
    } catch (error) {
      console.error("Erreur de récupération des données de l'acteur en cours:", error.message);
    }
  };

  const fetchPerson = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${params.actorId}/movie_credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'acteur en cours");
      }
      const dataPerson = await response.json();
      setThisPerson(dataPerson.cast);
    } catch (error) {
      console.error("Erreur de récupération des données de l'acteur en cours:", error.message);
    }
  };

  useEffect(() => {
    fetchCredits();
    fetchActor();
    fetchPerson();
  }, [params.movieId, params.actorId]);

  return (
    <div className="actor">
      <section className="content-actor">
        {thisActor && (
          <>
            <div className="actor-content">
              <img
                className="actor-image"
                src={`https://image.tmdb.org/t/p/w500/${thisActor.profile_path}`}
                alt={thisActor.name}
              />
              <h5>Date de naissance</h5>
              {new Date(thisActor.birthday).toLocaleDateString("fr-FR")}
              <h5>Joué dans</h5>
              {thisActor.popularity} films
            </div>
          </>
        )}
      </section>
      <div className="content">
        <section className="content-credits">
          {credits.length > 0 && (
            <>
             <h2>casting</h2>
              <div className="card-credits">
                {credits.slice(0, 11).map((item) => <ActorCard  actor={item} />)}
              </div>       
            </>
          )}
        </section>
        <section className="content-person">
          {thisPerson && thisPerson.length > 0 && (
            thisPerson.slice(0, 12).map((item) => <ActorCard key={item.id} actor={item} />)
          )}
        </section>
      </div>
    </div>
  );
};

export default Actor;
