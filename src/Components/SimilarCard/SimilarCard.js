import React from "react";
import "./similarcard.css";
import { Link } from "react-router-dom";

const SimilarCard = (props) => {
  const similarResp = props.similar;

  return (
    <div className="similar-card" id="similar">
      
        <div className="similar-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${similarResp.poster_path}`}
            alt={similarResp.name}
          />
        </div>
    
      <div className="actor-name">
        <h3>{similarResp.name}</h3>
      </div>
    </div>
  );
};

export default SimilarCard;
