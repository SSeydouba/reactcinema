import "./actorcard.css";
import { Link } from "react-router-dom";

const ActorCard = (props) => {
  const actorArr = props.actor;
  //console.log(actorArr);

  return (
    <div className="actor-card" id="casting">
      <Link to={`/actor/${actorArr.id}`}>
        <div className="actor-img">
          {actorArr.profile_path ? (
            <img 
              src={`https://image.tmdb.org/t/p/w500/${actorArr.profile_path}`}
              alt={actorArr.name} 
            />
          ) : actorArr.poster_path ? (
            <img 
              src={`https://image.tmdb.org/t/p/w500/${actorArr.poster_path}`}
              alt={actorArr.name} 
            />
          ) : null}
        </div>
      </Link>
      <div className="actor-name">
        <h3>{actorArr.name}</h3>
      </div>   
    </div>
  );
};

export default ActorCard;
